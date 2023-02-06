import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBooks from './+state/books.reducer';
import { BooksEffects } from './+state/books.effects';
import { BooksFacade } from './+state/books.facade';
import { BooksApiService } from './+state/books-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpTrackingModule } from 'http-tracking';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpTrackingModule,
    StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
  providers: [BooksFacade, BooksApiService],
})
export class BooksModule {}
