import { Action } from '@ngrx/store';

import * as HttpTrackingActions from './http-tracking.actions';
import { HttpTrackingEntity } from './http-tracking.models';
import { State, initialState, reducer } from './http-tracking.reducer';

describe('HttpTracking Reducer', () => {
  const createHttpTrackingEntity = (
    id: string,
    name = ''
  ): HttpTrackingEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid HttpTracking actions', () => {
    it('loadHttpTrackingSuccess should return the list of known HttpTracking', () => {
      const httpTracking = [
        createHttpTrackingEntity('PRODUCT-AAA'),
        createHttpTrackingEntity('PRODUCT-zzz'),
      ];
      const action = HttpTrackingActions.loadHttpTrackingSuccess({
        httpTracking,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
