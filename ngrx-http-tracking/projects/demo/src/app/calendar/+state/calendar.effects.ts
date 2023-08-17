import { createTrackingEffect } from 'ngrx-http-tracking';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CalendarApiService } from './calendar-api.service';
import * as CalendarActions from './calendar.actions';

@Injectable()
export class CalendarEffects {
    fetchCalendars$ = createTrackingEffect(
        this.actions$,
        CalendarActions.fetchCalendars,
        this.api.fetchCalendars,
        'Coulld not load calendars',
        context => {
            console.log('Calendars Successfully loaded');
            console.log('Request: ', context.request);
            console.log('Payload: ', context.payload);
        }
    );

    constructor(private readonly actions$: Actions, private api: CalendarApiService) {}
}
