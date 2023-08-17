import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AnimalsActions from './animals.actions';
import { AnimalsEntity } from './animals.models';

export const ANIMALS_FEATURE_KEY = 'animals';

export interface State extends EntityState<AnimalsEntity> {
    selectedId?: string; // which Animals record has been selected
}

export interface AnimalsPartialState {
    readonly [ANIMALS_FEATURE_KEY]: State;
}

export const animalsAdapter: EntityAdapter<AnimalsEntity> = createEntityAdapter<AnimalsEntity>({
    selectId: entity => entity.API,
});

export const initialState: State = animalsAdapter.getInitialState({});

const animalsReducer = createReducer(
    initialState,
    on(AnimalsActions.fetchAnimals.loaded, (state, { payload }) => animalsAdapter.setAll(payload, { ...state })),
    on(AnimalsActions.clearAnimals, state => animalsAdapter.removeAll(state))
);

export function reducer(state: State | undefined, action: Action) {
    return animalsReducer(state, action);
}
