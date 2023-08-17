import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as BusinessActions from './business.actions';
import { BusinessEntity } from './business.models';

export const BUSINESS_FEATURE_KEY = 'business';

export interface State extends EntityState<BusinessEntity> {
    selectedId?: string | number; // which Business record has been selected
}

export interface BusinessPartialState {
    readonly [BUSINESS_FEATURE_KEY]: State;
}

export const businessAdapter: EntityAdapter<BusinessEntity> = createEntityAdapter<BusinessEntity>({
    selectId: entity => entity.API,
});

export const initialState: State = businessAdapter.getInitialState();

const businessReducer = createReducer(
    initialState,
    on(BusinessActions.fetchbusiness.loaded, (state, { payload }) => businessAdapter.setAll(payload, { ...state })),
    on(BusinessActions.clearbusiness, state => businessAdapter.removeAll(state))
);

export function reducer(state: State | undefined, action: Action) {
    return businessReducer(state, action);
}
