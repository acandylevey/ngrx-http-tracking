import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as BusinessActions from './business.actions';
import { BusinessEffects } from './business.effects';
import { BusinessFacade } from './business.facade';
import { BusinessEntity } from './business.models';
import {
  BUSINESS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './business.reducer';
import * as BusinessSelectors from './business.selectors';

interface TestSchema {
  business: State;
}

describe('BusinessFacade', () => {
  let facade: BusinessFacade;
  let store: Store<TestSchema>;
  const createBusinessEntity = (id: string, name = ''): BusinessEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BUSINESS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BusinessEffects]),
        ],
        providers: [BusinessFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BusinessFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBusiness$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBusiness$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadBusinessSuccess` to manually update list
     */
    it('allBusiness$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBusiness$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BusinessActions.loadBusinessSuccess({
          business: [createBusinessEntity('AAA'), createBusinessEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBusiness$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
