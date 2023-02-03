import { createTrackingEffect } from '@acandylevey/ngrx-http-tracking';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AnimalsApiService } from './animals-api.service';
import * as AnimalsActions from './animals.actions';

@Injectable()
export class AnimalsEffects {
  fetchAnimals$ = createTrackingEffect(
    this.actions$,
    AnimalsActions.fetchAnimals,
    this.api.fetchAnimals,
    'Coulld not load animals',
    (context) => {
      console.log('Animals Successfully loaded');
      console.log('Request: ', context.request);
      console.log('Payload: ', context.payload);
    }
  );

  constructor(
    private readonly actions$: Actions,
    private api: AnimalsApiService
  ) {}
}
