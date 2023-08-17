import * as HttpTrackingActions from './http-tracking.actions';
import * as HttpTrackingSelectors from './http-tracking.selectors';
import { Action, Store } from '@ngrx/store';
import { HttpTrackingEntity } from '../model/http-tracking-entity';
import { debounceTime, filter, map, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, timer } from 'rxjs';
import { isError } from '../function/is-error';
import { mapActionTypeToId } from '../function/map-action-typ-to-id';
import { TrackingAction } from '../function/http-tracking-actions.factory';
import { LoadingState } from '../model/loading-state';
import { isDefined } from '../function/is-defined';

export interface HttpTrackingResult<T1, T2> {
    action: TrackingAction<T1, T2>;
    success: boolean;
    error?: Error;
}

@Injectable()
export class HttpTrackingFacade {
    constructor(private store: Store) {}

    public getTracking<T1, T2>(action: TrackingAction<T1, T2>): Observable<HttpTrackingEntity | undefined> {
        return this.store.select(HttpTrackingSelectors.selectOneHttpTracking(mapActionTypeToId(action.loading.type)));
    }

    public isLoading<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean> {
        return this.getTracking(action).pipe(map(x => x?.httpStatus === LoadingState.LOADING));
    }

    public isLoaded<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean> {
        return this.getTracking(action).pipe(map(x => x?.httpStatus === LoadingState.LOADED));
    }

    public isInit<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean> {
        return this.getTracking(action).pipe(map(x => !isDefined(x) || x?.httpStatus === LoadingState.INIT));
    }

    public getError<T1, T2>(action: TrackingAction<T1, T2>): Observable<string | null> {
        return this.getTracking(action).pipe(
            filter(x => isError(x?.httpStatus)),
            map(x => (<Error>x?.httpStatus).message)
        );
    }

    public isTagLoading(tag: string) {
        return this.store.select(HttpTrackingSelectors.selectLoadingByTag(tag)).pipe(debounceTime(100));
    }

    public getTagErrors(tag: string) {
        return this.store.select(HttpTrackingSelectors.selectErrorsByTag(tag)).pipe(debounceTime(100));
    }

    public clearGloballyHandledErrors() {
        this.store.dispatch(HttpTrackingActions.clearGloballyHandledErrors());
    }

    public clearTrackingMulti(actions: Action[]) {
        actions.forEach((action: any) => {
            this.store.dispatch(
                HttpTrackingActions.trackHttpRequest({
                    action: mapActionTypeToId(action.type),
                    httpStatus: LoadingState.INIT,
                    tags: action['tags'],
                })
            );
        });
    }

    public getGlobalLoading() {
        return this.store.select(HttpTrackingSelectors.selectLoadingByTag('global')).pipe(debounceTime(300));
    }

    public getGlobalErrors() {
        return this.store.select(HttpTrackingSelectors.selectErrorsByTag('global')).pipe(debounceTime(300));
    }

    public getResolved<T1, T2>(action: TrackingAction<T1, T2>): Observable<HttpTrackingResult<T1, T2>> {
        // this timer is here to prevent an issue with retrieving the state before
        // the reducer is updated on a second call to the same tracked action
        // TODO: resolve the actual issue
        return timer(5).pipe(
            switchMap(() =>
                this.getTracking(action).pipe(
                    filter(tracking => !!tracking),
                    map(tracking => (<HttpTrackingEntity>tracking).httpStatus),
                    filter(httpStatus => httpStatus === LoadingState.LOADED || isError(httpStatus)),
                    take(1),
                    map(httpStatus => {
                        const retVal = <HttpTrackingResult<T1, T2>>{
                            action,
                            success: httpStatus === LoadingState.LOADED,
                        };
                        if (isError(httpStatus)) {
                            retVal.error = httpStatus;
                        }
                        return retVal;
                    })
                )
            )
        );
    }

    public getMultiResolved<T1, T2>(actions: TrackingAction<T1, T2>[]): Observable<HttpTrackingResult<T1, T2>[]> {
        const results = actions.map(a => this.getResolved(a));
        return forkJoin(results);
    }
}
