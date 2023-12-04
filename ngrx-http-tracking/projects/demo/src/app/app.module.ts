import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AnimalsModule } from './animals/animals.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { BusinessModule } from './business/business.module';
import { CalendarModule } from './calendar/calendar.module';
import { NgrxHttpTrackingModule } from 'ngrx-http-tracking';

@NgModule({
    declarations: [AppComponent],
    imports: [
        NgrxHttpTrackingModule,
        BrowserModule,
        StoreModule.forRoot(
            {},
            {
                metaReducers: !environment.production ? [] : [],
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true,
                },
            }
        ),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument({connectInZone: true}) : [],
        AnimalsModule,
        BooksModule,
        CalendarModule,
        BusinessModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
