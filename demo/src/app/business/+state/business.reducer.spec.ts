import { Action } from '@ngrx/store';

import * as BusinessActions from './business.actions';
import { BusinessEntity } from './business.models';
import { State, initialState, reducer } from './business.reducer';

describe('Business Reducer', () => {
  const createBusinessEntity = (id: string, name = ''): BusinessEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Business actions', () => {
    it('loadBusinessSuccess should return the list of known Business', () => {
      const business = [
        createBusinessEntity('PRODUCT-AAA'),
        createBusinessEntity('PRODUCT-zzz'),
      ];
      const action = BusinessActions.loadBusinessSuccess({ business });

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
