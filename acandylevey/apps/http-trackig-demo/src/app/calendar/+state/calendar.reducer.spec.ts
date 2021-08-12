import { Action } from '@ngrx/store';

import * as CalendarActions from './calendar.actions';
import { CalendarEntity } from './calendar.models';
import { State, initialState, reducer } from './calendar.reducer';

describe('Calendar Reducer', () => {
  const createCalendarEntity = (id: string, name = ''): CalendarEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Calendar actions', () => {
    it('loadCalendarSuccess should return the list of known Calendar', () => {
      const calendar = [
        createCalendarEntity('PRODUCT-AAA'),
        createCalendarEntity('PRODUCT-zzz'),
      ];
      const action = CalendarActions.loadCalendarSuccess({ calendar });

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
