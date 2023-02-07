import { EntityAdapter, EntityState } from '@ngrx/entity';
import { HttpTrackingEntity } from '../model/http-tracking-entity';
export declare const HTTP_TRACKING_FEATURE_KEY = "httpTracking";
export declare type State = EntityState<HttpTrackingEntity>;
export declare const httpTrackingAdapter: EntityAdapter<HttpTrackingEntity>;
export declare const initialState: State;
export declare const httpTrackingReducer: import("@ngrx/store").ActionReducer<State, import("@ngrx/store").Action>;
