import * as fromAnimals from './+state/animals.reducer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AnimalsApiService } from './+state/animals-api.service';
import { AnimalsEffects } from './+state/animals.effects';
import { AnimalsFacade } from './+state/animals.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forFeature(
      fromAnimals.ANIMALS_FEATURE_KEY,
      fromAnimals.reducer
    ),
    EffectsModule.forFeature([AnimalsEffects]),
  ],
  providers: [AnimalsFacade, AnimalsApiService],
})
export class AnimalsModule {}
