import {Observable} from "rxjs";
import {HttpTrackingResult} from "../+state/http-tracking.facade";
export function httpTrackingSuccessFilter(source: Observable<HttpTrackingResult<any, any>>): Observable<boolean> {
  return new Observable(subscriber => {
    source.subscribe({
      next(value) {
        if (value.success) {
          return subscriber.next(true);
        }
      },
      error(error) {
        subscriber.error(error);
      },
      complete() {
        subscriber.complete();
      },
    });
  });
}
