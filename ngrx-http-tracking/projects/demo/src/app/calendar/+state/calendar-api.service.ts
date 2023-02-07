import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { CalendarApiResponse } from './calendar.models';

@Injectable()
export class CalendarApiService {
  constructor(public http: HttpClient) {
    console.log(http);
    console.log(this);
  }

  public fetchCalendars = () => {
    return this.http
      .get<CalendarApiResponse>(
        'https://api.publicapis.org/entries?category=calendar&https=true'
      )
      .pipe(
        map((response) => response.entries),
        delay(200) // .2 Second delay for simulation
      );
  };
}
