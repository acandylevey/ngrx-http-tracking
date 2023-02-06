/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpTrackingEntity } from '../model/http-tracking-entity';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { TrackingAction } from '../function/http-tracking-actions.factory';
import { LoadingState } from '../model/loading-state';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HttpTrackingResult<T1, T2> {}

@Injectable()
export class HttpTrackingFacadeStub {
    public getTracking(action: any) {
        return of<HttpTrackingEntity>({
            httpStatus: LoadingState.INIT,
            action: '[fake] action 123',
            tags: action['tags'],
        });
    }

    public isLoading<T>(action: Action) {
        return of<boolean>(false);
    }

    public isLoaded<T>(action: Action) {
        return of<boolean>(true);
    }

    public isInit<T>(action: Action): Observable<boolean> {
        return of<boolean>(false);
    }

    public getError<T>(action: Action): Observable<string | null> {
        return of(null);
    }

    public clearGloballyHandledErrors() {}

    public clearTrackingMulti(actions: Action[]) {}

    public getGlobalLoading() {
        return of<boolean>(false);
    }

    public getGlobalErrors() {
        return of<Error[]>([]);
    }

    public getResolved<T1, T2>(action: TrackingAction<T1, T2>) {
        return of<HttpTrackingResult<T1, T2>>();
    }
}
