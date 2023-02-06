import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Action } from '@ngrx/store/src/models';
import { environment } from 'src/environments/environment';
import { AppState } from './app-state';

export const actionReducer =
  (reducer: ActionReducer<any>): ActionReducer<any> =>
  (state: AppState | undefined, action: Action) => {
    return reducer(state, action);
  };

export const reducers: ActionReducerMap<AppState> = {
  ['router']: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [actionReducer]
  : [actionReducer];
