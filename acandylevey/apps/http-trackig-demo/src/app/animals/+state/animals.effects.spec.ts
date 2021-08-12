import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AnimalsActions from './animals.actions';
import { AnimalsEffects } from './animals.effects';

describe('AnimalsEffects', () => {
  let actions: Observable<Action>;
  let effects: AnimalsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AnimalsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AnimalsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AnimalsActions.init() });

      const expected = hot('-a-|', {
        a: AnimalsActions.loadAnimalsSuccess({ animals: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
