import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BUSINESS_FEATURE_KEY,
  State,
  businessAdapter,
} from './business.reducer';

// Lookup the 'Business' feature state managed by NgRx
export const getBusinessState =
  createFeatureSelector<State>(BUSINESS_FEATURE_KEY);

const { selectAll, selectEntities } = businessAdapter.getSelectors();

export const getAllBusiness = createSelector(getBusinessState, (state: State) =>
  selectAll(state)
);

export const getBusinessEntities = createSelector(
  getBusinessState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBusinessState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBusinessEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
