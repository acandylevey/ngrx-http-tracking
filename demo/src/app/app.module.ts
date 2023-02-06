import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimalsModule } from './animals/animals.module';
import { AppStoreModule } from './app-store/app-store.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { BusinessModule } from './business/business.module';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AnimalsModule,
    BooksModule,
    CalendarModule,
    BusinessModule,
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
