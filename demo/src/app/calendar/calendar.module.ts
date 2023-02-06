import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCalendar from './+state/calendar.reducer';
import { CalendarEffects } from './+state/calendar.effects';
import { CalendarFacade } from './+state/calendar.facade';
import { CalendarApiService } from './+state/calendar-api.service';
import { NgrxHttpTrackingModule } from 'http-tracking';
@NgModule({
  declarations: [],
  imports: [
    NgrxHttpTrackingModule,
    CommonModule,
    StoreModule.forFeature(
      fromCalendar.CALENDAR_FEATURE_KEY,
      fromCalendar.reducer
    ),
    EffectsModule.forFeature([CalendarEffects]),
  ],
  providers: [CalendarFacade, CalendarApiService],
})
export class CalendarModule {}
