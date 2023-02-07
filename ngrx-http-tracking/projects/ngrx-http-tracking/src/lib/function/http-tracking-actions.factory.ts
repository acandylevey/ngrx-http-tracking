import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, ActionCreator, Creator, props } from '@ngrx/store';
import {
  ActionCreatorProps,
  FunctionWithParametersType,
  NotAllowedCheck,
  TypedAction,
} from '@ngrx/store/src/models';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpTrackingEntity } from '../model/http-tracking-entity';
import { LoadingState } from '../model/loading-state';
import { convertResponseToError } from './convert-response-to-error';

function createTrackingAction<T extends string>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: LoadingState
): ActionCreator<T, () => TypedAction<T>>;

function createTrackingAction<T extends string, P extends object>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: LoadingState,
  config: ActionCreatorProps<P> | null
): ActionCreator<T, (props?: P) => P & TypedAction<T>>;

function createTrackingAction<
  T extends string,
  P extends any[],
  R extends object
>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: LoadingState,
  creator: Creator<P, R> & NotAllowedCheck<R>
): FunctionWithParametersType<P, R & TypedAction<T>> & TypedAction<T>;

function createTrackingAction<T extends string, C extends Creator>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: LoadingState,
  config?: { _as: 'props' } | C
): ActionCreator<T> {
  if (typeof config === 'function') {
    return defineType(
      type,
      (...args: any[]) =>
        <HttpTrackingEntity & TypedAction<T>>{
          ...config(...args),
          type,
          httpStatus,
          tags: hasGlobalTag ? ['global', ...tags] : [...tags],
        }
    );
  }
  const as = config ? config._as : 'empty';
  switch (as) {
    case 'empty':
      return defineType(
        type,
        () =>
          <HttpTrackingEntity & TypedAction<T>>{
            type,
            httpStatus,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
          }
      );
    case 'props':
      return defineType(
        type,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        (props: object) =>
          <HttpTrackingEntity & TypedAction<T>>{
            ...props,
            type,
            httpStatus,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
          }
      );
    default:
      throw new Error('Unexpected config.');
  }
}

function createTrackingFailureAction<
  T extends string,
  err extends any,
  fallbackMsg extends string
>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: (err: any, fallbackMsg: string) => Error
): ActionCreator<T, (err: any, fallbackMsg: string) => TypedAction<T>>;

function createTrackingFailureAction<
  T extends string,
  err extends any,
  fallbackMsg extends string,
  P extends object
>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: (err: any, fallbackMsg: string) => Error,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>
): ActionCreator<
  T,
  (
    err: any,
    fallbackMsg: string,
    props: P & NotAllowedCheck<P>
  ) => P & TypedAction<T>
>;

function createTrackingFailureAction<T extends string, C extends Creator>(
  type: T,
  hasGlobalTag: boolean,
  tags: string[],
  httpStatus: (err: any, fallbackMsg: string) => Error,
  config?: { _as: 'props' } | C
): ActionCreator<T> {
  if (typeof config === 'function') {
    return defineType(
      type,
      (err: any, fallbackMsg: string, ...args: any[]) =>
        <HttpTrackingEntity & TypedAction<T>>{
          httpStatus: httpStatus(err, fallbackMsg),
          ...config(...args),
          type,
          tags: hasGlobalTag ? ['global', ...tags] : [...tags],
        }
    );
  }
  const as = config ? config._as : 'empty';
  switch (as) {
    case 'empty':
      return defineType(
        type,
        (err: any, fallbackMsg: string) =>
          <HttpTrackingEntity & TypedAction<T>>{
            httpStatus: httpStatus(err, fallbackMsg),
            type,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
          }
      );
    case 'props':
      return defineType(
        type,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        (err: any, fallbackMsg: string, props: object) =>
          <HttpTrackingEntity & TypedAction<T>>{
            httpStatus: httpStatus(err, fallbackMsg),
            ...props,
            type,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
          }
      );
    default:
      throw new Error('Unexpected config.');
  }
}

function defineType<T extends string>(
  type: T,
  creator: Creator
): ActionCreator<T> {
  return <ActionCreator<T>>Object.defineProperty(creator, 'type', {
    value: type,
    writable: false,
  });
}

export const createTrackingActions = <TRequest, TPayload>(
  namespace: string,
  actionName: string,
  hasGlobalTag = true,
  tags: string[] = [namespace]
): TrackingAction<TRequest, TPayload> => ({
  loading: createTrackingAction(
    `[${namespace}] ${actionName}`,
    hasGlobalTag,
    tags,
    LoadingState.LOADING,
    props<{ request: TRequest }>()
  ),
  loaded: createTrackingAction(
    `[${namespace}] ${actionName}Success`,
    hasGlobalTag,
    tags,
    LoadingState.LOADED,
    props<{ payload: TPayload }>()
  ),
  failure: createTrackingFailureAction(
    `[${namespace}] ${actionName}Failure`,
    hasGlobalTag,
    tags,
    convertResponseToError
  ),
});

export interface TrackingAction<TRequest, TPayload> {
  loading: ((attr?: {
    request: TRequest;
  }) => { request: TRequest } & TypedAction<string>) &
    TypedAction<string>;
  loaded: ((attr?: {
    payload: TPayload;
  }) => { payload: TPayload } & TypedAction<string>) &
    TypedAction<string>;
  failure: ActionCreator<
    string,
    (httpStatus: Error, fallbackErrorMsg: string) => TypedAction<string>
  >;
}

export const createTrackingEffect = <TRequest, TPayload>(
  actions$: Actions,
  tackingAction: TrackingAction<TRequest, TPayload>,
  serviceCall: (request: TRequest) => Observable<TPayload>,
  fallbackErrorMsg: string,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  successFn: (httpContext: { request: TRequest; payload: TPayload }) => void = (
    httpContext
  ) => {}
) =>
  createEffect(() =>
    actions$.pipe(
      ofType(tackingAction.loading),
      switchMap((action) =>
        serviceCall(action.request).pipe(
          map((payload) => tackingAction.loaded({ payload })),
          tap((successAction) =>
            successFn({
              request: action.request,
              payload: successAction.payload,
            })
          ),
          catchError((e) => {
            console.error(e);
            const subjectMsg = new Subject<Action>();

            if (
              e.error instanceof Blob &&
              e.error.type === 'application/json'
            ) {
              e.error.text().then((errorBlobText: string) => {
                const errorJson = JSON.parse(errorBlobText);
                subjectMsg.next(tackingAction.failure(e, errorJson.error));
              });
            } else {
              return of(tackingAction.failure(e, fallbackErrorMsg));
            }
            return subjectMsg;
          })
        )
      )
    )
  );
