import { HttpTrackingEntity } from '../model/http-tracking-entity';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { TrackingAction } from '../function/http-tracking-actions.factory';
import * as i0 from "@angular/core";
interface HttpTrackingResult<T1, T2> {
}
export declare class HttpTrackingFacadeStub {
    getTracking(action: any): Observable<HttpTrackingEntity>;
    isLoading<T>(action: Action): Observable<boolean>;
    isLoaded<T>(action: Action): Observable<boolean>;
    isInit<T>(action: Action): Observable<boolean>;
    getError<T>(action: Action): Observable<string | null>;
    clearGloballyHandledErrors(): void;
    clearTrackingMulti(actions: Action[]): void;
    getGlobalLoading(): Observable<boolean>;
    getGlobalErrors(): Observable<Error[]>;
    getResolved<T1, T2>(action: TrackingAction<T1, T2>): Observable<HttpTrackingResult<T1, T2>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpTrackingFacadeStub, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpTrackingFacadeStub>;
}
export {};
