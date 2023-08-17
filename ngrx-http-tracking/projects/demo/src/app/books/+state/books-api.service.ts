import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { BookApiResponse } from './books.models';

@Injectable()
export class BooksApiService {
    constructor(public http: HttpClient) {
        console.log(http);
        console.log(this);
    }

    public fetchBooks = () => {
        return this.http.get<BookApiResponse>('https://api.publicapis.org/entries?category=books&https=true').pipe(
            map(response => response.entries),
            delay(200) // .2 Second delay for simulation
        );
    };
}
