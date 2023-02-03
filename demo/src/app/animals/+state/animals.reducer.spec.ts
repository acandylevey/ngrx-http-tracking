import { Action } from '@ngrx/store';

import * as AnimalsActions from './animals.actions';
import { AnimalsEntity } from './animals.models';
import { State, initialState, reducer } from './animals.reducer';

describe('Animals Reducer', () => {
  const createAnimalsEntity = (id: string, name = ''): AnimalsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Animals actions', () => {
    it('loadAnimalsSuccess should return the list of known Animals', () => {
      const animals = [
        createAnimalsEntity('PRODUCT-AAA'),
        createAnimalsEntity('PRODUCT-zzz'),
      ];
      const action = AnimalsActions.loadAnimalsSuccess({ animals });

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
