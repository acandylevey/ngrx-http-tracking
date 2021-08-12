import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as BusinessActions from './business.actions';
import { BusinessEffects } from './business.effects';

describe('BusinessEffects', () => {
  let actions: Observable<Action>;
  let effects: BusinessEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BusinessEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BusinessEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BusinessActions.init() });

      const expected = hot('-a-|', {
        a: BusinessActions.loadBusinessSuccess({ business: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
