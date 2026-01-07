import * as rxjs from 'rxjs';
import { Observable } from 'rxjs';
import * as _ngrx_store from '@ngrx/store';
import { Action, ActionCreator, Store } from '@ngrx/store';
import * as _ngrx_effects from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import { EntityState, EntityAdapter } from '@ngrx/entity';

declare enum LoadingState {
    INIT = "INIT",
    LOADING = "LOADING",
    LOADED = "LOADED"
}

interface HttpTrackingEntity {
    httpStatus: LoadingState | Error;
    action: string;
    tags: string[];
}

declare const createTrackingActions: <TRequest, TPayload>(namespace: string, actionName: string, hasGlobalTag?: boolean, tags?: string[]) => TrackingAction<TRequest, TPayload>;
interface TrackingAction<TRequest, TPayload> {
    loading: ((attr?: {
        request: TRequest;
    }) => {
        request: TRequest;
    } & Action<string>) & Action<string>;
    loaded: ((attr?: {
        payload: TPayload;
    }) => {
        payload: TPayload;
    } & Action<string>) & Action<string>;
    failure: ActionCreator<string, (httpStatus: Error, fallbackErrorMsg: string) => Action<string>>;
}
declare const createTrackingEffect: <TRequest, TPayload>(actions$: Actions, tackingAction: TrackingAction<TRequest, TPayload>, serviceCall: (request: TRequest) => Observable<TPayload>, fallbackErrorMsg: string, successFn?: (httpContext: {
    request: TRequest;
    payload: TPayload;
}) => void) => Observable<Action<string> | ({
    payload: TPayload;
} & Action<string>)> & _ngrx_effects.CreateEffectMetadata;
declare const createTrackingEffectExhaustMap: <TRequest, TPayload>(actions$: Actions, tackingAction: TrackingAction<TRequest, TPayload>, serviceCall: (request: TRequest) => Observable<TPayload>, fallbackErrorMsg: string, successFn?: (httpContext: {
    request: TRequest;
    payload: TPayload;
}) => void) => Observable<Action<string> | ({
    payload: TPayload;
} & Action<string>)> & _ngrx_effects.CreateEffectMetadata;

interface HttpTrackingResult$1<T1, T2> {
}
declare class HttpTrackingFacadeStub {
    getTracking(action: any): Observable<HttpTrackingEntity>;
    isLoading<T>(action: Action): Observable<boolean>;
    isLoaded<T>(action: Action): Observable<boolean>;
    isInit<T>(action: Action): Observable<boolean>;
    getError<T>(action: Action): Observable<string | null>;
    clearGloballyHandledErrors(): void;
    clearTrackingMulti(actions: Action[]): void;
    getGlobalLoading(): Observable<boolean>;
    getGlobalErrors(): Observable<Error[]>;
    getResolved<T1, T2>(action: TrackingAction<T1, T2>): Observable<HttpTrackingResult$1<T1, T2>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpTrackingFacadeStub, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpTrackingFacadeStub>;
}

interface HttpTrackingResult<T1, T2> {
    action: TrackingAction<T1, T2>;
    success: boolean;
    error?: Error;
}
declare class HttpTrackingFacade {
    private store;
    constructor(store: Store);
    getTracking<T1, T2>(action: TrackingAction<T1, T2>): Observable<HttpTrackingEntity | undefined>;
    isLoading<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean>;
    isLoaded<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean>;
    isInit<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean>;
    getError<T1, T2>(action: TrackingAction<T1, T2>): Observable<string | null>;
    isTagLoading(tag: string): Observable<boolean>;
    getTagErrors(tag: string): Observable<Error[]>;
    clearGloballyHandledErrors(): void;
    clearTrackingMulti(actions: Action[]): void;
    getGlobalLoading(): Observable<boolean>;
    getGlobalErrors(): Observable<Error[]>;
    getResolved<T1, T2>(action: TrackingAction<T1, T2>): Observable<HttpTrackingResult<T1, T2>>;
    getMultiResolved<T1, T2>(actions: TrackingAction<T1, T2>[]): Observable<HttpTrackingResult<T1, T2>[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpTrackingFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpTrackingFacade>;
}

declare class NgrxHttpTrackingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgrxHttpTrackingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgrxHttpTrackingModule, never, [typeof i1.CommonModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgrxHttpTrackingModule>;
}

declare function httpTrackingSuccessFilter(source: Observable<HttpTrackingResult<any, any>>): Observable<boolean>;

declare class HttpTrackingEffects {
    private actions$;
    private store;
    trackHttpRequest$: rxjs.Observable<any> & _ngrx_effects.CreateEffectMetadata;
    constructor(actions$: Actions, store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpTrackingEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpTrackingEffects>;
}

declare const HTTP_TRACKING_FEATURE_KEY = "httpTracking";
type State = EntityState<HttpTrackingEntity>;
declare const httpTrackingAdapter: EntityAdapter<HttpTrackingEntity>;
declare const initialState: State;
declare const httpTrackingReducer: _ngrx_store.ActionReducer<State, _ngrx_store.Action<string>>;

export { HTTP_TRACKING_FEATURE_KEY, HttpTrackingEffects, HttpTrackingFacade, HttpTrackingFacadeStub, NgrxHttpTrackingModule, createTrackingActions, createTrackingEffect, createTrackingEffectExhaustMap, httpTrackingAdapter, httpTrackingReducer, httpTrackingSuccessFilter, initialState };
export type { HttpTrackingEntity, HttpTrackingResult, State, TrackingAction };
