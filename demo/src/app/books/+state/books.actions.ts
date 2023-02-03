import { BooksEntity } from './books.models';
import { createTrackingActions } from '@acandylevey/ngrx-http-tracking';
import { createAction } from '@ngrx/store';

const BOOK_NAMESPACE = 'books';
export const fetchBooks = createTrackingActions<void, BooksEntity[]>(
  BOOK_NAMESPACE,
  'fetchBooks'
);

export const clearBooks = createAction(`[${BOOK_NAMESPACE}] clearBooks`);
