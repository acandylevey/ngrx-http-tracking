import { CalendarEntity } from './calendar.models';
import {
  calendarAdapter,
  CalendarPartialState,
  initialState,
} from './calendar.reducer';
import * as CalendarSelectors from './calendar.selectors';

describe('Calendar Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCalendarId = (it: CalendarEntity) => it.id;
  const createCalendarEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CalendarEntity);

  let state: CalendarPartialState;

  beforeEach(() => {
    state = {
      calendar: calendarAdapter.setAll(
        [
          createCalendarEntity('PRODUCT-AAA'),
          createCalendarEntity('PRODUCT-BBB'),
          createCalendarEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Calendar Selectors', () => {
    it('getAllCalendar() should return the list of Calendar', () => {
      const results = CalendarSelectors.getAllCalendar(state);
      const selId = getCalendarId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CalendarSelectors.getSelected(state) as CalendarEntity;
      const selId = getCalendarId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCalendarLoaded() should return the current "loaded" status', () => {
      const result = CalendarSelectors.getCalendarLoaded(state);

      expect(result).toBe(true);
    });

    it('getCalendarError() should return the current "error" state', () => {
      const result = CalendarSelectors.getCalendarError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
