import { createTrackingActions } from 'ngrx-http-tracking';
import { createAction } from '@ngrx/store';
import { CalendarEntity } from './calendar.models';

const CALENDAR_NAMESPACE = 'calendar';

export const fetchCalendars = createTrackingActions<void, CalendarEntity[]>(CALENDAR_NAMESPACE, 'fetchCalendars');

export const clearCalendars = createAction(`[${CALENDAR_NAMESPACE}] clearCalendars`);
