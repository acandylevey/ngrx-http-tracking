import { Action, Store } from '@ngrx/store';
import { HttpTrackingEntity } from '../model/http-tracking-entity';
import { Observable } from 'rxjs';
import { TrackingAction } from '../function/http-tracking-actions.factory';
import * as i0 from "@angular/core";
export interface HttpTrackingResult<T1, T2> {
    action: TrackingAction<T1, T2>;
    success: boolean;
    error?: Error;
}
export declare class HttpTrackingFacade {
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
