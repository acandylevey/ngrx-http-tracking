import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CalendarActions from './calendar.actions';
import { CalendarEntity } from './calendar.models';

export const CALENDAR_FEATURE_KEY = 'calendar';

export interface State extends EntityState<CalendarEntity> {
  selectedId?: string | number; // which Calendar record has been selected
}

export interface CalendarPartialState {
  readonly [CALENDAR_FEATURE_KEY]: State;
}

export const calendarAdapter: EntityAdapter<CalendarEntity> =
  createEntityAdapter<CalendarEntity>({
    selectId: (entity) => entity.API,
  });

export const initialState: State = calendarAdapter.getInitialState();

const calendarReducer = createReducer(
  initialState,
  on(CalendarActions.fetchCalendars.loaded, (state, { payload }) =>
    calendarAdapter.setAll(payload, { ...state })
  ),
  on(CalendarActions.clearCalendars, (state) =>
    calendarAdapter.removeAll(state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return calendarReducer(state, action);
}
