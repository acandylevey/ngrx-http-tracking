import { Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { BooksEntity } from './books.models';
import { State, initialState, reducer } from './books.reducer';

describe('Books Reducer', () => {
  const createBooksEntity = (id: string, name = ''): BooksEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Books actions', () => {
    it('loadBooksSuccess should return the list of known Books', () => {
      const books = [
        createBooksEntity('PRODUCT-AAA'),
        createBooksEntity('PRODUCT-zzz'),
      ];
      const action = BooksActions.loadBooksSuccess({ books });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
