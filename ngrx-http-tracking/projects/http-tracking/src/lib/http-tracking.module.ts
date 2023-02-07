import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpTrackingEffects } from './+state/http-tracking.effects';
import { HttpTrackingFacade } from './+state/http-tracking.facade';
import * as fromHttpTracking from './+state/http-tracking.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromHttpTracking.HTTP_TRACKING_FEATURE_KEY,
      fromHttpTracking.httpTrackingReducer
    ),
    EffectsModule.forFeature([HttpTrackingEffects]),
  ],
  providers: [HttpTrackingFacade],
})
export class NgrxHttpTrackingModule {}
