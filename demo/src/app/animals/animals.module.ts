import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAnimals from './+state/animals.reducer';
import { AnimalsEffects } from './+state/animals.effects';
import { AnimalsFacade } from './+state/animals.facade';
import { AnimalsApiService } from './+state/animals-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgrxHttpTrackingModule } from '@acandylevey/ngrx-http-tracking';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgrxHttpTrackingModule,
    StoreModule.forFeature(
      fromAnimals.ANIMALS_FEATURE_KEY,
      fromAnimals.reducer
    ),
    EffectsModule.forFeature([AnimalsEffects]),
  ],
  providers: [AnimalsFacade, AnimalsApiService],
})
export class AnimalsModule {}
