import { createTrackingEffect } from 'ngrx-http-tracking';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BooksApiService } from './books-api.service';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {
    fetchBooks$ = createTrackingEffect(
        this.actions$,
        BooksActions.fetchBooks,
        this.api.fetchBooks,
        'Coulld not load books',
        context => {
            console.log('Books Successfully loaded');
            console.log('Request: ', context.request);
            console.log('Payload: ', context.payload);
        }
    );

    constructor(private readonly actions$: Actions, private api: BooksApiService) {}
}
