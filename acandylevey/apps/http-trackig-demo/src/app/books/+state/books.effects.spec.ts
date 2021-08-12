import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as BooksActions from './books.actions';
import { BooksEffects } from './books.effects';

describe('BooksEffects', () => {
  let actions: Observable<Action>;
  let effects: BooksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BooksEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BooksEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BooksActions.init() });

      const expected = hot('-a-|', {
        a: BooksActions.loadBooksSuccess({ books: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
