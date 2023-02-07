import { HttpTrackingEntity } from '../model/http-tracking-entity';
export declare const trackHttpRequest: import("@ngrx/store").ActionCreator<"[Http Tracking] TrackHttpRequest", (props: HttpTrackingEntity) => HttpTrackingEntity & import("@ngrx/store/src/models").TypedAction<"[Http Tracking] TrackHttpRequest">>;
export declare const clearGloballyHandledErrors: import("@ngrx/store").ActionCreator<"[Http Tracking] ClearGloballyHandledErrors", () => import("@ngrx/store/src/models").TypedAction<"[Http Tracking] ClearGloballyHandledErrors">>;
