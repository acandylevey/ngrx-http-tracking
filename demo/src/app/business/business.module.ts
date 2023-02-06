import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBusiness from './+state/business.reducer';
import { BusinessEffects } from './+state/business.effects';
import { BusinessFacade } from './+state/business.facade';
import { BusinessApiService } from './+state/business-api.service';
import { NgrxHttpTrackingModule } from 'http-tracking';
@NgModule({
  declarations: [],
  imports: [
    NgrxHttpTrackingModule,
    CommonModule,
    StoreModule.forFeature(
      fromBusiness.BUSINESS_FEATURE_KEY,
      fromBusiness.reducer
    ),
    EffectsModule.forFeature([BusinessEffects]),
  ],
  providers: [BusinessFacade, BusinessApiService],
})
export class BusinessModule {}
