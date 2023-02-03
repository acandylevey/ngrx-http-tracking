import { BusinessEntity } from './business.models';
import {
  businessAdapter,
  BusinessPartialState,
  initialState,
} from './business.reducer';
import * as BusinessSelectors from './business.selectors';

describe('Business Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBusinessId = (it: BusinessEntity) => it.id;
  const createBusinessEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BusinessEntity);

  let state: BusinessPartialState;

  beforeEach(() => {
    state = {
      business: businessAdapter.setAll(
        [
          createBusinessEntity('PRODUCT-AAA'),
          createBusinessEntity('PRODUCT-BBB'),
          createBusinessEntity('PRODUCT-CCC'),
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

  describe('Business Selectors', () => {
    it('getAllBusiness() should return the list of Business', () => {
      const results = BusinessSelectors.getAllBusiness(state);
      const selId = getBusinessId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BusinessSelectors.getSelected(state) as BusinessEntity;
      const selId = getBusinessId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getBusinessLoaded() should return the current "loaded" status', () => {
      const result = BusinessSelectors.getBusinessLoaded(state);

      expect(result).toBe(true);
    });

    it('getBusinessError() should return the current "error" state', () => {
      const result = BusinessSelectors.getBusinessError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
