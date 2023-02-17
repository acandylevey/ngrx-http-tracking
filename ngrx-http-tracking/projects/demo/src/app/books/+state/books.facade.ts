import { HttpTrackingFacade } from 'ngrx-http-tracking';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as BooksActions from './books.actions';
import * as BooksSelectors from './books.selectors';

@Injectable()
export class BooksFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.httpTracker.isLoaded(BooksActions.fetchBooks);
  allBooks$ = this.store.pipe(select(BooksSelectors.getAllBooks));
  selectedBooks$ = this.store.pipe(select(BooksSelectors.getSelected));

  fetchBooks() {
    this.store.dispatch(BooksActions.fetchBooks.loading());
    return BooksActions.fetchBooks;
  }

  clearBooks() {
    this.store.dispatch(BooksActions.clearBooks());
  }

  constructor(
    private readonly store: Store,
    private httpTracker: HttpTrackingFacade
  ) {}
}
