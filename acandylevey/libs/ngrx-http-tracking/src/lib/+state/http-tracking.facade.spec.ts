import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as HttpTrackingActions from './http-tracking.actions';
import { HttpTrackingEffects } from './http-tracking.effects';
import { HttpTrackingFacade } from './http-tracking.facade';
import { HttpTrackingEntity } from './http-tracking.models';
import {
  HTTP_TRACKING_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './http-tracking.reducer';
import * as HttpTrackingSelectors from './http-tracking.selectors';

interface TestSchema {
  httpTracking: State;
}

describe('HttpTrackingFacade', () => {
  let facade: HttpTrackingFacade;
  let store: Store<TestSchema>;
  const createHttpTrackingEntity = (
    id: string,
    name = ''
  ): HttpTrackingEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, reducer),
          EffectsModule.forFeature([HttpTrackingEffects]),
        ],
        providers: [HttpTrackingFacade],
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
      facade = TestBed.inject(HttpTrackingFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allHttpTracking$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allHttpTracking$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadHttpTrackingSuccess` to manually update list
     */
    it('allHttpTracking$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allHttpTracking$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        HttpTrackingActions.loadHttpTrackingSuccess({
          httpTracking: [
            createHttpTrackingEntity('AAA'),
            createHttpTrackingEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allHttpTracking$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
