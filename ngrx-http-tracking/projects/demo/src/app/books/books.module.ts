import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BooksApiService } from './+state/books-api.service';
import { BooksEffects } from './+state/books.effects';
import { BooksFacade } from './+state/books.facade';
import * as fromBooks from './+state/books.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
        EffectsModule.forFeature([BooksEffects]),
    ],
    providers: [BooksFacade, BooksApiService],
})
export class BooksModule {}
