import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ANIMALS_FEATURE_KEY, State, animalsAdapter } from './animals.reducer';

// Lookup the 'Animals' feature state managed by NgRx
export const getAnimalsState = createFeatureSelector<State>(ANIMALS_FEATURE_KEY);

const { selectAll, selectEntities } = animalsAdapter.getSelectors();

export const getAllAnimals = createSelector(getAnimalsState, (state: State) => selectAll(state));

export const getAnimalsEntities = createSelector(getAnimalsState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getAnimalsState, (state: State) => state.selectedId);

export const getSelected = createSelector(getAnimalsEntities, getSelectedId, (entities, selectedId) =>
    selectedId ? entities[selectedId] : undefined
);
