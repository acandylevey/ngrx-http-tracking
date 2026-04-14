import { Observable } from "rxjs";
import { HttpTrackingResult } from "../+state/http-tracking.facade";
export declare function httpTrackingSuccessFilter(source: Observable<HttpTrackingResult<any, any>>): Observable<boolean>;
