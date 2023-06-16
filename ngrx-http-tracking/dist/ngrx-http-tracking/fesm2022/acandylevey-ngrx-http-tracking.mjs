import { of, forkJoin, Subject } from 'rxjs';
import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import * as i1 from '@ngrx/store';
import { createAction, props, createReducer, on, createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { map, filter, debounceTime, take, switchMap, tap, catchError } from 'rxjs/operators';
import * as i1$1 from '@ngrx/effects';
import { createEffect, ofType, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

var LoadingState;
(function (LoadingState) {
    LoadingState["INIT"] = "INIT";
    LoadingState["LOADING"] = "LOADING";
    LoadingState["LOADED"] = "LOADED";
})(LoadingState || (LoadingState = {}));

class HttpTrackingFacadeStub {
    getTracking(action) {
        return of({
            httpStatus: LoadingState.INIT,
            action: '[fake] action 123',
            tags: action['tags'],
        });
    }
    isLoading(action) {
        return of(false);
    }
    isLoaded(action) {
        return of(true);
    }
    isInit(action) {
        return of(false);
    }
    getError(action) {
        return of(null);
    }
    clearGloballyHandledErrors() { }
    clearTrackingMulti(actions) { }
    getGlobalLoading() {
        return of(false);
    }
    getGlobalErrors() {
        return of([]);
    }
    getResolved(action) {
        return of();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacadeStub, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacadeStub }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacadeStub, decorators: [{
            type: Injectable
        }] });

const ACTIONS_NAMESPACE = 'Http Tracking';
const trackHttpRequest = createAction(`[${ACTIONS_NAMESPACE}] TrackHttpRequest`, props());
const clearGloballyHandledErrors = createAction(`[${ACTIONS_NAMESPACE}] ClearGloballyHandledErrors`);

const HTTP_TRACKING_FEATURE_KEY = 'httpTracking';
const httpTrackingAdapter = createEntityAdapter({
    selectId: (x) => x.action,
});
const initialState = httpTrackingAdapter.getInitialState();
const httpTrackingReducer = createReducer(initialState, on(trackHttpRequest, (state, { action, httpStatus, tags }) => httpTrackingAdapter.upsertOne({ action, httpStatus, tags }, state)), on(clearGloballyHandledErrors, (state) => {
    const actionsToUpdate = state.ids
        .map((id) => state.entities[id])
        .filter((httpTracking) => !!httpTracking &&
        httpTracking?.httpStatus?.message &&
        httpTracking.tags.includes('global'))
        .map((tracking) => ({
        ...tracking,
        httpStatus: LoadingState.INIT,
    }));
    return httpTrackingAdapter.upsertMany(actionsToUpdate, state);
}));

const isDefined = (val) => val !== null && val !== undefined;

const selectFeature = createFeatureSelector(HTTP_TRACKING_FEATURE_KEY);
const httpTrackingSelectors = httpTrackingAdapter.getSelectors(selectFeature);
const selectOneHttpTracking = (id) => createSelector(httpTrackingSelectors.selectEntities, (s) => s[id]);
const selectHttpTrackingByTag = (tag) => createSelector(httpTrackingSelectors.selectAll, (s) => s.filter((httpTracking) => httpTracking.tags.includes(tag)));
const selectErrorsByTag = (tag) => createSelector(httpTrackingSelectors.selectAll, (s) => s
    .filter((httpTracking) => isDefined(httpTracking.httpStatus?.message) &&
    httpTracking.tags.includes(tag))
    .map((httpTracking) => httpTracking.httpStatus));
const selectLoadingByTag = (tag) => createSelector(httpTrackingSelectors.selectAll, (s) => s.some((httpTracking) => httpTracking.httpStatus === LoadingState.LOADING &&
    httpTracking.tags.includes(tag)));

const isError = (value) => !!value && value.name && value.message;

const mapActionTypeToId = (actionType) => actionType
    .toLowerCase()
    .replace(/success/g, '')
    .replace(/failure/g, '')
    .trim()
    .replace(/ /g, '-');

class HttpTrackingFacade {
    constructor(store) {
        this.store = store;
    }
    getTracking(action) {
        return this.store.select(selectOneHttpTracking(mapActionTypeToId(action.loading.type)));
    }
    isLoading(action) {
        return this.getTracking(action).pipe(map((x) => x?.httpStatus === LoadingState.LOADING));
    }
    isLoaded(action) {
        return this.getTracking(action).pipe(map((x) => x?.httpStatus === LoadingState.LOADED));
    }
    isInit(action) {
        return this.getTracking(action).pipe(map((x) => !isDefined(x) || x?.httpStatus === LoadingState.INIT));
    }
    getError(action) {
        return this.getTracking(action).pipe(filter((x) => isError(x?.httpStatus)), map((x) => (x?.httpStatus).message));
    }
    isTagLoading(tag) {
        return this.store
            .select(selectLoadingByTag(tag))
            .pipe(debounceTime(100));
    }
    getTagErrors(tag) {
        return this.store
            .select(selectErrorsByTag(tag))
            .pipe(debounceTime(100));
    }
    clearGloballyHandledErrors() {
        this.store.dispatch(clearGloballyHandledErrors());
    }
    clearTrackingMulti(actions) {
        actions.forEach((action) => {
            this.store.dispatch(trackHttpRequest({
                action: mapActionTypeToId(action.type),
                httpStatus: LoadingState.INIT,
                tags: action['tags'],
            }));
        });
    }
    getGlobalLoading() {
        return this.store
            .select(selectLoadingByTag('global'))
            .pipe(debounceTime(300));
    }
    getGlobalErrors() {
        return this.store
            .select(selectErrorsByTag('global'))
            .pipe(debounceTime(300));
    }
    getResolved(action) {
        return this.getTracking(action).pipe(filter((tracking) => !!tracking), map((tracking) => tracking.httpStatus), filter((httpStatus) => httpStatus === LoadingState.LOADED || isError(httpStatus)), take(1), map((httpStatus) => {
            const retVal = {
                action,
                success: httpStatus === LoadingState.LOADED,
            };
            if (isError(httpStatus)) {
                retVal.error = httpStatus;
            }
            return retVal;
        }));
    }
    getMultiResolved(actions) {
        const results = actions.map((a) => this.getResolved(a));
        return forkJoin(results);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacade, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacade, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Store }]; } });

const convertResponseToError = (err, fallbackMessage) => {
    let errorMsg = '';
    if (err?.name === 'HttpErrorResponse' && typeof err.error === 'string') {
        errorMsg = err.error;
    }
    else if (err?.name === 'HttpErrorResponse' &&
        typeof err?.error?.error === 'string') {
        errorMsg = err.error.error;
    }
    return new Error(!errorMsg ? fallbackMessage : errorMsg);
};

function createTrackingAction(type, hasGlobalTag, tags, httpStatus, config) {
    if (typeof config === 'function') {
        return defineType(type, (...args) => ({
            ...config(...args),
            type,
            httpStatus,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
        }));
    }
    const as = config ? config._as : 'empty';
    switch (as) {
        case 'empty':
            return defineType(type, () => ({
                type,
                httpStatus,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        case 'props':
            return defineType(type, 
            // eslint-disable-next-line @typescript-eslint/no-shadow
            (props) => ({
                ...props,
                type,
                httpStatus,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        default:
            throw new Error('Unexpected config.');
    }
}
function createTrackingFailureAction(type, hasGlobalTag, tags, httpStatus, config) {
    if (typeof config === 'function') {
        return defineType(type, (err, fallbackMsg, ...args) => ({
            httpStatus: httpStatus(err, fallbackMsg),
            ...config(...args),
            type,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
        }));
    }
    const as = config ? config._as : 'empty';
    switch (as) {
        case 'empty':
            return defineType(type, (err, fallbackMsg) => ({
                httpStatus: httpStatus(err, fallbackMsg),
                type,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        case 'props':
            return defineType(type, 
            // eslint-disable-next-line @typescript-eslint/no-shadow
            (err, fallbackMsg, props) => ({
                httpStatus: httpStatus(err, fallbackMsg),
                ...props,
                type,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        default:
            throw new Error('Unexpected config.');
    }
}
function defineType(type, creator) {
    return Object.defineProperty(creator, 'type', {
        value: type,
        writable: false,
    });
}
const createTrackingActions = (namespace, actionName, hasGlobalTag = true, tags = [namespace]) => ({
    loading: createTrackingAction(`[${namespace}] ${actionName}`, hasGlobalTag, tags, LoadingState.LOADING, props()),
    loaded: createTrackingAction(`[${namespace}] ${actionName}Success`, hasGlobalTag, tags, LoadingState.LOADED, props()),
    failure: createTrackingFailureAction(`[${namespace}] ${actionName}Failure`, hasGlobalTag, tags, convertResponseToError),
});
const createTrackingEffect = (actions$, tackingAction, serviceCall, fallbackErrorMsg, 
// eslint-disable-next-line @typescript-eslint/no-empty-function
successFn = (httpContext) => { }) => createEffect(() => actions$.pipe(ofType(tackingAction.loading), switchMap((action) => serviceCall(action.request).pipe(map((payload) => tackingAction.loaded({ payload })), tap((successAction) => successFn({
    request: action.request,
    payload: successAction.payload,
})), catchError((e) => {
    console.error(e);
    const subjectMsg = new Subject();
    if (e.error instanceof Blob &&
        e.error.type === 'application/json') {
        e.error.text().then((errorBlobText) => {
            const errorJson = JSON.parse(errorBlobText);
            subjectMsg.next(tackingAction.failure(e, errorJson.error));
        });
    }
    else {
        return of(tackingAction.failure(e, fallbackErrorMsg));
    }
    return subjectMsg;
})))));

class HttpTrackingEffects {
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        this.trackHttpRequest$ = createEffect(() => this.actions$.pipe(filter((action) => action['httpStatus'] !== undefined &&
            action.type !== trackHttpRequest.type), tap((action) => {
            if (action['httpStatus'] === LoadingState.LOADED &&
                !action.type.toLowerCase().includes('success') &&
                !action.type.toLowerCase().includes('failure')) {
                if (window && window.console) {
                    window.console.log('%cHTTP Request Loading Tracker could not find Success/Failure on action.type', 'background: yellow; font-size: large;');
                }
            }
            this.store.dispatch(trackHttpRequest({
                httpStatus: action['httpStatus'],
                action: mapActionTypeToId(action.type),
                tags: action['tags'],
            }));
        })), {
            dispatch: false,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingEffects, deps: [{ token: i1$1.Actions }, { token: i1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingEffects, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingEffects, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Actions }, { type: i1.Store }]; } });

class NgrxHttpTrackingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: NgrxHttpTrackingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.1", ngImport: i0, type: NgrxHttpTrackingModule, imports: [CommonModule, i1.StoreFeatureModule, i1$1.EffectsFeatureModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: NgrxHttpTrackingModule, providers: [HttpTrackingFacade], imports: [CommonModule,
            StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
            EffectsModule.forFeature([HttpTrackingEffects])] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: NgrxHttpTrackingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
                        EffectsModule.forFeature([HttpTrackingEffects]),
                    ],
                    providers: [HttpTrackingFacade],
                }]
        }] });

/*
 * Public API Surface of http-tracking
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HttpTrackingFacade, HttpTrackingFacadeStub, NgrxHttpTrackingModule, createTrackingActions, createTrackingEffect };
//# sourceMappingURL=acandylevey-ngrx-http-tracking.mjs.map
