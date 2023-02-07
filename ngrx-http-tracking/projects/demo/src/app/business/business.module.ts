import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BusinessApiService } from './+state/business-api.service';
import { BusinessEffects } from './+state/business.effects';
import { BusinessFacade } from './+state/business.facade';
import * as fromBusiness from './+state/business.reducer';
@NgModule({
  declarations: [],
  imports: [
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
