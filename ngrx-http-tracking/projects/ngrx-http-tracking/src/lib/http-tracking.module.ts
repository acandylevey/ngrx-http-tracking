import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpTrackingEffects } from './+state/http-tracking.effects';
import { HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer } from './+state/http-tracking.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
        EffectsModule.forFeature([HttpTrackingEffects]),
    ],
})
export class NgrxHttpTrackingModule {}
