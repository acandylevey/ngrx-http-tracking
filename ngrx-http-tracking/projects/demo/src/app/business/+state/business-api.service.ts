import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { BusinessApiResponse } from './business.models';

@Injectable()
export class BusinessApiService {
  constructor(public http: HttpClient) {
    console.log(http);
    console.log(this);
  }

  public fetchBusiness = () => {
    return this.http
      .get<BusinessApiResponse>(
        'https://api.publicapis.org/entries?category=business&https=true'
      )
      .pipe(
        map((response) => response.entries),
        delay(200) // .2 Second delay for simulation
      );
  };
}
