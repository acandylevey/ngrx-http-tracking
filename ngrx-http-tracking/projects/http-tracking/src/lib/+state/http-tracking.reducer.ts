import * as HttpTrackingActions from './http-tracking.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { HttpTrackingEntity } from '../model/http-tracking-entity';
import { LoadingState } from '../model/loading-state';

export const HTTP_TRACKING_FEATURE_KEY = 'httpTracking';

export type State = EntityState<HttpTrackingEntity>;

export const httpTrackingAdapter: EntityAdapter<HttpTrackingEntity> =
  createEntityAdapter<HttpTrackingEntity>({
    selectId: (x) => x.action,
  });

export const initialState: State = httpTrackingAdapter.getInitialState();

export const httpTrackingReducer = createReducer(
  initialState,
  on(
    HttpTrackingActions.trackHttpRequest,
    (state, { action, httpStatus, tags }) =>
      httpTrackingAdapter.upsertOne({ action, httpStatus, tags }, state)
  ),
  on(HttpTrackingActions.clearGloballyHandledErrors, (state) => {
    const actionsToUpdate = (<string[]>state.ids)
      .map((id) => state.entities[id])
      .filter(
        (httpTracking) =>
          !!httpTracking &&
          (<Error>httpTracking?.httpStatus)?.message &&
          httpTracking.tags.includes('global')
      )
      .map(
        (tracking) =>
          <HttpTrackingEntity>{
            ...tracking,
            httpStatus: LoadingState.INIT,
          }
      );
    return httpTrackingAdapter.upsertMany(actionsToUpdate, state);
  })
);
