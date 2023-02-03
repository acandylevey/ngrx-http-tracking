import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as BooksActions from './books.actions';
import { BooksEffects } from './books.effects';
import { BooksFacade } from './books.facade';
import { BooksEntity } from './books.models';
import {
  BOOKS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './books.reducer';
import * as BooksSelectors from './books.selectors';

interface TestSchema {
  books: State;
}

describe('BooksFacade', () => {
  let facade: BooksFacade;
  let store: Store<TestSchema>;
  const createBooksEntity = (id: string, name = ''): BooksEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BOOKS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BooksEffects]),
        ],
        providers: [BooksFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BooksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBooks$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBooks$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadBooksSuccess` to manually update list
     */
    it('allBooks$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBooks$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BooksActions.loadBooksSuccess({
          books: [createBooksEntity('AAA'), createBooksEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBooks$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
