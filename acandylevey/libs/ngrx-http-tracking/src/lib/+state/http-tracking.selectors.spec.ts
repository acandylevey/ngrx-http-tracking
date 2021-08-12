import { HttpTrackingEntity } from './http-tracking.models';
import {
  httpTrackingAdapter,
  HttpTrackingPartialState,
  initialState,
} from './http-tracking.reducer';
import * as HttpTrackingSelectors from './http-tracking.selectors';

describe('HttpTracking Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHttpTrackingId = (it: HttpTrackingEntity) => it.id;
  const createHttpTrackingEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HttpTrackingEntity);

  let state: HttpTrackingPartialState;

  beforeEach(() => {
    state = {
      httpTracking: httpTrackingAdapter.setAll(
        [
          createHttpTrackingEntity('PRODUCT-AAA'),
          createHttpTrackingEntity('PRODUCT-BBB'),
          createHttpTrackingEntity('PRODUCT-CCC'),
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

  describe('HttpTracking Selectors', () => {
    it('getAllHttpTracking() should return the list of HttpTracking', () => {
      const results = HttpTrackingSelectors.getAllHttpTracking(state);
      const selId = getHttpTrackingId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HttpTrackingSelectors.getSelected(
        state
      ) as HttpTrackingEntity;
      const selId = getHttpTrackingId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getHttpTrackingLoaded() should return the current "loaded" status', () => {
      const result = HttpTrackingSelectors.getHttpTrackingLoaded(state);

      expect(result).toBe(true);
    });

    it('getHttpTrackingError() should return the current "error" state', () => {
      const result = HttpTrackingSelectors.getHttpTrackingError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
