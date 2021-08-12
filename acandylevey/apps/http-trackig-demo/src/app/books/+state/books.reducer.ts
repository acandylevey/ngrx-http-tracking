import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { BooksEntity } from './books.models';

export const BOOKS_FEATURE_KEY = 'books';

export interface State extends EntityState<BooksEntity> {
  selectedId?: string; // which Books record has been selected
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: State;
}

export const booksAdapter: EntityAdapter<BooksEntity> =
  createEntityAdapter<BooksEntity>({
    selectId: (entity) => entity.API,
  });

export const initialState: State = booksAdapter.getInitialState({});

const booksReducer = createReducer(
  initialState,
  on(BooksActions.fetchBooks.loaded, (state, { payload }) =>
    booksAdapter.setAll(payload, { ...state })
  ),
  on(BooksActions.clearBooks, (state) => booksAdapter.removeAll(state))
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
