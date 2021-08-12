import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { debounceTime, filter, map, take } from 'rxjs/operators';
import { TrackingAction } from '../function/http-tracking-actions.factory';
import { isDefined, isError } from '../function/is-defined.function';
import { mapActionTypeToId } from '../function/map-action-type-to-id.function';
import { HttpTrackingEntity } from '../model/http-tracking-entity.model';
import { LoadingState } from '../model/loading-sate.enum';
import * as HttpTrackingActions from './http-tracking.actions';
import * as fromHttpTracking from './http-tracking.reducer';
import * as HttpTrackingSelectors from './http-tracking.selectors';

interface HttpTrackingResult<T1, T2> {
  action: TrackingAction<T1, T2>;
  success: boolean;
  error?: Error;
}

@Injectable()
export class HttpTrackingFacade {
  constructor(
    private store: Store<fromHttpTracking.HttpTrackingPartialState>
  ) {}

  public getTracking<T1, T2>(
    action: TrackingAction<T1, T2>
  ): Observable<HttpTrackingEntity | undefined> {
    return this.store.select(
      HttpTrackingSelectors.selectOneHttpTracking(
        mapActionTypeToId(action.loading.type)
      )
    );
  }

  public isLoading<T1, T2>(
    action: TrackingAction<T1, T2>
  ): Observable<boolean> {
    return this.getTracking(action).pipe(
      map((x) => x?.httpStatus === LoadingState.LOADING)
    );
  }

  public isLoaded<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean> {
    return this.getTracking(action).pipe(
      map((x) => x?.httpStatus === LoadingState.LOADED)
    );
  }

  public isInit<T1, T2>(action: TrackingAction<T1, T2>): Observable<boolean> {
    return this.getTracking(action).pipe(
      map((x) => !isDefined(x) || x?.httpStatus === LoadingState.INIT)
    );
  }

  public getError<T1, T2>(
    action: TrackingAction<T1, T2>
  ): Observable<string | null> {
    return this.getTracking(action).pipe(
      filter((x) => isError(x?.httpStatus)),
      map((x) => (<Error>x?.httpStatus).message)
    );
  }

  public isTagLoading(tag: string) {
    return this.store
      .select(HttpTrackingSelectors.selectLoadingByTag(tag))
      .pipe(debounceTime(100));
  }

  public getTagErrors(tag: string) {
    return this.store
      .select(HttpTrackingSelectors.selectErrorsByTag(tag))
      .pipe(debounceTime(100));
  }

  public clearGloballyHandledErrors() {
    this.store.dispatch(HttpTrackingActions.clearGloballyHandledErrors());
  }

  public clearTrackingMulti(actions: Action[]) {
    actions.forEach((action: any) => {
      this.store.dispatch(
        HttpTrackingActions.trackHttpRequest({
          action: mapActionTypeToId(action.type),
          httpStatus: LoadingState.INIT,
          tags: action['tags'],
        })
      );
    });
  }

  public getGlobalLoading() {
    return this.store
      .select(HttpTrackingSelectors.selectLoadingByTag('global'))
      .pipe(debounceTime(300));
  }

  public getGlobalErrors() {
    return this.store
      .select(HttpTrackingSelectors.selectErrorsByTag('global'))
      .pipe(debounceTime(300));
  }

  public getResolved<T1, T2>(
    action: TrackingAction<T1, T2>
  ): Observable<HttpTrackingResult<T1, T2>> {
    return this.getTracking(action).pipe(
      filter((tracking) => isDefined(tracking)),
      map((tracking) => (<HttpTrackingEntity>tracking).httpStatus),
      filter(
        (httpStatus) =>
          httpStatus === LoadingState.LOADED || isError(httpStatus)
      ),
      take(1),
      map((httpStatus) => {
        const retVal = <HttpTrackingResult<T1, T2>>{
          action,
          success: httpStatus === LoadingState.LOADED,
        };
        if (isError(httpStatus)) {
          retVal.error = httpStatus;
        }
        return retVal;
      })
    );
  }

  public getMultiResolved<T1, T2>(
    actions: TrackingAction<T1, T2>[]
  ): Observable<HttpTrackingResult<T1, T2>[]> {
    const results = actions.map((a) => this.getResolved(a));
    return forkJoin(results);
  }
}
