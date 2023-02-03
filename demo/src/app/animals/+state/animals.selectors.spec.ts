import { AnimalsEntity } from './animals.models';
import {
  animalsAdapter,
  AnimalsPartialState,
  initialState,
} from './animals.reducer';
import * as AnimalsSelectors from './animals.selectors';

describe('Animals Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAnimalsId = (it: AnimalsEntity) => it.id;
  const createAnimalsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AnimalsEntity);

  let state: AnimalsPartialState;

  beforeEach(() => {
    state = {
      animals: animalsAdapter.setAll(
        [
          createAnimalsEntity('PRODUCT-AAA'),
          createAnimalsEntity('PRODUCT-BBB'),
          createAnimalsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Animals Selectors', () => {
    it('getAllAnimals() should return the list of Animals', () => {
      const results = AnimalsSelectors.getAllAnimals(state);
      const selId = getAnimalsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AnimalsSelectors.getSelected(state) as AnimalsEntity;
      const selId = getAnimalsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAnimalsLoaded() should return the current "loaded" status', () => {
      const result = AnimalsSelectors.getAnimalsLoaded(state);

      expect(result).toBe(true);
    });

    it('getAnimalsError() should return the current "error" state', () => {
      const result = AnimalsSelectors.getAnimalsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
