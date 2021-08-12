import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AnimalsActions from './animals.actions';
import { AnimalsEffects } from './animals.effects';
import { AnimalsFacade } from './animals.facade';
import { AnimalsEntity } from './animals.models';
import {
  ANIMALS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './animals.reducer';
import * as AnimalsSelectors from './animals.selectors';

interface TestSchema {
  animals: State;
}

describe('AnimalsFacade', () => {
  let facade: AnimalsFacade;
  let store: Store<TestSchema>;
  const createAnimalsEntity = (id: string, name = ''): AnimalsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ANIMALS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AnimalsEffects]),
        ],
        providers: [AnimalsFacade],
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
      facade = TestBed.inject(AnimalsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAnimals$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAnimals$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAnimalsSuccess` to manually update list
     */
    it('allAnimals$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAnimals$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AnimalsActions.loadAnimalsSuccess({
          animals: [createAnimalsEntity('AAA'), createAnimalsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allAnimals$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
