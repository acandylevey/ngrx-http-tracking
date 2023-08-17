import { createTrackingEffect } from 'ngrx-http-tracking';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BusinessApiService } from './business-api.service';
import * as BusinessActions from './business.actions';

@Injectable()
export class BusinessEffects {
    fetchBusiness$ = createTrackingEffect(
        this.actions$,
        BusinessActions.fetchbusiness,
        this.api.fetchBusiness,
        'Coulld not load business',
        context => {
            console.log('Businesses Successfully loaded');
            console.log('Request: ', context.request);
            console.log('Payload: ', context.payload);
        }
    );

    constructor(private readonly actions$: Actions, private api: BusinessApiService) {}
}
