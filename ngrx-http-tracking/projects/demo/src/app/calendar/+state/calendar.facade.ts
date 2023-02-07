import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { HttpTrackingFacade } from 'http-tracking';
import * as CalendarActions from './calendar.actions';
import * as CalendarSelectors from './calendar.selectors';

@Injectable()
export class CalendarFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.httpTracker.isLoaded(CalendarActions.fetchCalendars.loaded);
  allCalendar$ = this.store.pipe(select(CalendarSelectors.getAllCalendar));
  selectedCalendar$ = this.store.pipe(select(CalendarSelectors.getSelected));

  fetchCalendars() {
    this.store.dispatch(CalendarActions.fetchCalendars.loading());
    return CalendarActions.fetchCalendars;
  }

  clearCalendars() {
    this.store.dispatch(CalendarActions.clearCalendars());
  }

  constructor(
    private readonly store: Store,
    private httpTracker: HttpTrackingFacade
  ) {}
}
