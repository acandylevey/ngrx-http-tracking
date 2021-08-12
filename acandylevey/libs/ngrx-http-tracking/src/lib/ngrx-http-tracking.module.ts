import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHttpTracking from './+state/http-tracking.reducer';
import { HttpTrackingEffects } from './+state/http-tracking.effects';
import { HttpTrackingFacade } from './+state/http-tracking.facade';

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
