import { HttpTrackingFacade } from 'http-tracking';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as BusinessActions from './business.actions';
import * as BusinessSelectors from './business.selectors';

@Injectable()
export class BusinessFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.httpTracker.isLoaded(BusinessActions.fetchbusiness.loaded);
  allBusiness$ = this.store.pipe(select(BusinessSelectors.getAllBusiness));
  selectedBusiness$ = this.store.pipe(select(BusinessSelectors.getSelected));

  constructor(
    private readonly store: Store,
    private httpTracker: HttpTrackingFacade
  ) {}

  fetchBusiness() {
    this.store.dispatch(BusinessActions.fetchbusiness.loading());
    return BusinessActions.fetchbusiness;
  }

  clearBusiness() {
    this.store.dispatch(BusinessActions.clearbusiness());
  }
}
