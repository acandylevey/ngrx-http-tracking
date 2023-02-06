import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { mapActionTypeToId } from '../function/map-action-typ-to-id';
import { LoadingState } from '../model/loading-state';
import { trackHttpRequest } from './http-tracking.actions';

@Injectable({
  providedIn: 'root',
})
export class HttpTrackingEffects {
  trackHttpRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        filter(
          (action: any) =>
            action['httpStatus'] !== undefined &&
            action.type !== trackHttpRequest.type
        ),
        tap((action) => {
          if (
            action['httpStatus'] === LoadingState.LOADED &&
            !action.type.toLowerCase().includes('success') &&
            !action.type.toLowerCase().includes('failure')
          ) {
            if (window && window.console) {
              window.console.log(
                '%cHTTP Request Loading Tracker could not find Success/Failure on action.type',
                'background: yellow; font-size: large;'
              );
            }
          }

          this.store.dispatch(
            trackHttpRequest({
              httpStatus: action['httpStatus'],
              action: mapActionTypeToId(action.type),
              tags: action['tags'],
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
