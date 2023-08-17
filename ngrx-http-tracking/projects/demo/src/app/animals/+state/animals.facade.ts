import { HttpTrackingFacade } from 'ngrx-http-tracking';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as AnimalsActions from './animals.actions';
import * as AnimalsSelectors from './animals.selectors';

@Injectable()
export class AnimalsFacade {
    /**
     * Combine pieces of state using createSelector,
     * and expose them as observables through the facade.
     */
    loaded$ = this.httpTracker.isLoaded(AnimalsActions.fetchAnimals);
    allAnimals$ = this.store.pipe(select(AnimalsSelectors.getAllAnimals));
    selectedAnimals$ = this.store.pipe(select(AnimalsSelectors.getSelected));

    fetchAnimals() {
        this.store.dispatch(AnimalsActions.fetchAnimals.loading());
        return AnimalsActions.fetchAnimals;
    }

    clearAnimals() {
        this.store.dispatch(AnimalsActions.clearAnimals());
    }

    constructor(private readonly store: Store, private httpTracker: HttpTrackingFacade) {}
}
