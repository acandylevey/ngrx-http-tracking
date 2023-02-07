import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarApiService } from './+state/calendar-api.service';
import { CalendarEffects } from './+state/calendar.effects';
import { CalendarFacade } from './+state/calendar.facade';
import * as fromCalendar from './+state/calendar.reducer';

@NgModule({
  declarations: [],
  imports: [
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
