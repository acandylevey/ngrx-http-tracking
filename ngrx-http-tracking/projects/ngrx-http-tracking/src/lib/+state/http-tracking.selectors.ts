import { HTTP_TRACKING_FEATURE_KEY, httpTrackingAdapter, State } from './http-tracking.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isDefined } from '../function/is-defined';
import { LoadingState } from '../model/loading-state';

const selectFeature = createFeatureSelector<State>(HTTP_TRACKING_FEATURE_KEY);

const httpTrackingSelectors = httpTrackingAdapter.getSelectors(selectFeature);

export const selectOneHttpTracking = (id: string) => createSelector(httpTrackingSelectors.selectEntities, s => s[id]);

export const selectHttpTrackingByTag = (tag: string) =>
    createSelector(httpTrackingSelectors.selectAll, s => s.filter(httpTracking => httpTracking.tags.includes(tag)));

export const selectErrorsByTag = (tag: string) =>
    createSelector(httpTrackingSelectors.selectAll, s =>
        s
            .filter(
                httpTracking => isDefined((<Error>httpTracking.httpStatus)?.message) && httpTracking.tags.includes(tag)
            )
            .map(httpTracking => <Error>httpTracking.httpStatus)
    );

export const selectLoadingByTag = (tag: string) =>
    createSelector(httpTrackingSelectors.selectAll, s =>
        s.some(httpTracking => httpTracking.httpStatus === LoadingState.LOADING && httpTracking.tags.includes(tag))
    );
