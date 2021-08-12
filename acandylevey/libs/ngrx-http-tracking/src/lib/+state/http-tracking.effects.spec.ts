import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as HttpTrackingActions from './http-tracking.actions';
import { HttpTrackingEffects } from './http-tracking.effects';

describe('HttpTrackingEffects', () => {
  let actions: Observable<Action>;
  let effects: HttpTrackingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HttpTrackingEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(HttpTrackingEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HttpTrackingActions.init() });

      const expected = hot('-a-|', {
        a: HttpTrackingActions.loadHttpTrackingSuccess({ httpTracking: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
