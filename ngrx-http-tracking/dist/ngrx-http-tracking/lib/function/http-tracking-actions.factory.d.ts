import { Actions } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
export declare const createTrackingActions: <TRequest, TPayload>(namespace: string, actionName: string, hasGlobalTag?: boolean, tags?: string[]) => TrackingAction<TRequest, TPayload>;
export interface TrackingAction<TRequest, TPayload> {
    loading: ((attr?: {
        request: TRequest;
    }) => {
        request: TRequest;
    } & TypedAction<string>) & TypedAction<string>;
    loaded: ((attr?: {
        payload: TPayload;
    }) => {
        payload: TPayload;
    } & TypedAction<string>) & TypedAction<string>;
    failure: ActionCreator<string, (httpStatus: Error, fallbackErrorMsg: string) => TypedAction<string>>;
}
export declare const createTrackingEffect: <TRequest, TPayload>(actions$: Actions, tackingAction: TrackingAction<TRequest, TPayload>, serviceCall: (request: TRequest) => Observable<TPayload>, fallbackErrorMsg: string, successFn?: (httpContext: {
    request: TRequest;
    payload: TPayload;
}) => void) => Observable<TypedAction<string> | ({
    payload: TPayload;
} & TypedAction<string>)> & import("@ngrx/effects").CreateEffectMetadata;
