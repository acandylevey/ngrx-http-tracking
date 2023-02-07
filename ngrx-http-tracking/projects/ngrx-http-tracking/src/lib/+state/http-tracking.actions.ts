import { createAction, props } from '@ngrx/store';
import { HttpTrackingEntity } from '../model/http-tracking-entity';

const ACTIONS_NAMESPACE = 'Http Tracking';

export const trackHttpRequest = createAction(
  `[${ACTIONS_NAMESPACE}] TrackHttpRequest`,
  props<HttpTrackingEntity>()
);

export const clearGloballyHandledErrors = createAction(
  `[${ACTIONS_NAMESPACE}] ClearGloballyHandledErrors`
);
