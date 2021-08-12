import { AnimalsEntity } from './animals.models';
import { createTrackingActions } from '@acandylevey/ngrx-http-tracking';
import { createAction } from '@ngrx/store';

const ANIMAL_NAMESPACE = 'animals';
export const fetchAnimals = createTrackingActions<void, AnimalsEntity[]>(
  ANIMAL_NAMESPACE,
  'fetchAnimals'
);

export const clearAnimals = createAction(`[${ANIMAL_NAMESPACE}] clearAnimals`);
