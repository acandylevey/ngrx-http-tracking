import { HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer } from './+state/http-tracking.reducer';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpTrackingEffects } from './+state/http-tracking.effects';
import { HttpTrackingFacade } from './+state/http-tracking.facade';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
        EffectsModule.forFeature([HttpTrackingEffects]),
    ],
    providers: [HttpTrackingFacade],
})
export class HttpTrackingModule {}
