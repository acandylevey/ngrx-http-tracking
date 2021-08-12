import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as CalendarActions from './calendar.actions';
import { CalendarEffects } from './calendar.effects';

describe('CalendarEffects', () => {
  let actions: Observable<Action>;
  let effects: CalendarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CalendarEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CalendarEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CalendarActions.init() });

      const expected = hot('-a-|', {
        a: CalendarActions.loadCalendarSuccess({ calendar: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
