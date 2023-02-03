import { HttpTrackingFacade } from '@acandylevey/ngrx-http-tracking';
import { Component } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { AnimalsFacade } from './animals/+state/animals.facade';
import * as BooksActions from './books/+state/books.actions';
import { BooksFacade } from './books/+state/books.facade';
import * as BusinessActions from './business/+state/business.actions';
import { BusinessFacade } from './business/+state/business.facade';
import * as CalendarActions from './calendar/+state/calendar.actions';
import { CalendarFacade } from './calendar/+state/calendar.facade';

@Component({
  selector: 'acandylevey-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'http-trackig-demo';

  global = {
    loading$: this.httpTrackingFacade.getGlobalLoading(),
    errors$: this.httpTrackingFacade.getGlobalErrors(),
  };

  animals = {
    entities$: this.animalsFacade.allAnimals$,
  };

  books = {
    isLoaded$: this.httpTrackingFacade.isLoaded(BooksActions.fetchBooks),
    isLoading$: this.httpTrackingFacade.isLoading(BooksActions.fetchBooks),
    trackingData$: this.httpTrackingFacade.getTracking(BooksActions.fetchBooks),
    entities$: this.booksFacade.allBooks$,
  };

  chained = {
    businessStatus$: this.httpTrackingFacade
      .getTracking(BusinessActions.fetchbusiness)
      .pipe(map((x) => x?.httpStatus)),
    calendarStatus$: this.httpTrackingFacade
      .getTracking(CalendarActions.fetchCalendars)
      .pipe(map((x) => x?.httpStatus)),
  };

  constructor(
    private animalsFacade: AnimalsFacade,
    private booksFacade: BooksFacade,
    private businessFacade: BusinessFacade,
    private calendarFacade: CalendarFacade,
    private httpTrackingFacade: HttpTrackingFacade
  ) {}

  public fetchAnimals() {
    this.animalsFacade.fetchAnimals();
  }

  public clearAnimals() {
    this.animalsFacade.clearAnimals();
  }

  public fetchBooks() {
    this.booksFacade.fetchBooks();
  }

  public clearBooks() {
    this.booksFacade.clearBooks();
  }

  public fetchChain() {
    this.httpTrackingFacade
      .getResolved(this.businessFacade.fetchBusiness())
      .pipe(
        filter((result) => result.success),
        switchMap((result) =>
          this.httpTrackingFacade.getResolved(
            this.calendarFacade.fetchCalendars()
          )
        ),
        filter((resuilt) => resuilt.success)
      )
      .subscribe((result) => {
        console.log('Both were a success');
      });
  }

  public clearChain() {
    this.businessFacade.clearBusiness();
    this.calendarFacade.clearCalendars();
  }
}
