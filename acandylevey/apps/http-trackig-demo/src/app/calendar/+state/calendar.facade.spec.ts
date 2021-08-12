import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CalendarActions from './calendar.actions';
import { CalendarEffects } from './calendar.effects';
import { CalendarFacade } from './calendar.facade';
import { CalendarEntity } from './calendar.models';
import {
  CALENDAR_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './calendar.reducer';
import * as CalendarSelectors from './calendar.selectors';

interface TestSchema {
  calendar: State;
}

describe('CalendarFacade', () => {
  let facade: CalendarFacade;
  let store: Store<TestSchema>;
  const createCalendarEntity = (id: string, name = ''): CalendarEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CALENDAR_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CalendarEffects]),
        ],
        providers: [CalendarFacade],
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
      facade = TestBed.inject(CalendarFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCalendar$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCalendar$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCalendarSuccess` to manually update list
     */
    it('allCalendar$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCalendar$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CalendarActions.loadCalendarSuccess({
          calendar: [createCalendarEntity('AAA'), createCalendarEntity('BBB')],
        })
      );

      list = await readFirst(facade.allCalendar$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
