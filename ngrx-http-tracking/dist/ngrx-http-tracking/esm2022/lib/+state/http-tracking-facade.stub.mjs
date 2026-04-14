import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoadingState } from '../model/loading-state';
import * as i0 from "@angular/core";
export class HttpTrackingFacadeStub {
    getTracking(action) {
        return of({
            httpStatus: LoadingState.INIT,
            action: '[fake] action 123',
            tags: action['tags'],
        });
    }
    isLoading(action) {
        return of(false);
    }
    isLoaded(action) {
        return of(true);
    }
    isInit(action) {
        return of(false);
    }
    getError(action) {
        return of(null);
    }
    clearGloballyHandledErrors() { }
    clearTrackingMulti(actions) { }
    getGlobalLoading() {
        return of(false);
    }
    getGlobalErrors() {
        return of([]);
    }
    getResolved(action) {
        return of();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: HttpTrackingFacadeStub, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: HttpTrackingFacadeStub }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: HttpTrackingFacadeStub, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy1mYWNhZGUuc3R1Yi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtaHR0cC10cmFja2luZy9zcmMvbGliLytzdGF0ZS9odHRwLXRyYWNraW5nLWZhY2FkZS5zdHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBTXRELE1BQU0sT0FBTyxzQkFBc0I7SUFDeEIsV0FBVyxDQUFDLE1BQVc7UUFDMUIsT0FBTyxFQUFFLENBQXFCO1lBQzFCLFVBQVUsRUFBRSxZQUFZLENBQUMsSUFBSTtZQUM3QixNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxTQUFTLENBQUksTUFBYztRQUM5QixPQUFPLEVBQUUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sUUFBUSxDQUFJLE1BQWM7UUFDN0IsT0FBTyxFQUFFLENBQVUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLE1BQU0sQ0FBSSxNQUFjO1FBQzNCLE9BQU8sRUFBRSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRLENBQUksTUFBYztRQUM3QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sMEJBQTBCLEtBQUksQ0FBQztJQUUvQixrQkFBa0IsQ0FBQyxPQUFpQixJQUFHLENBQUM7SUFFeEMsZ0JBQWdCO1FBQ25CLE9BQU8sRUFBRSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxlQUFlO1FBQ2xCLE9BQU8sRUFBRSxDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxXQUFXLENBQVMsTUFBOEI7UUFDckQsT0FBTyxFQUFFLEVBQThCLENBQUM7SUFDNUMsQ0FBQzs4R0F2Q1Esc0JBQXNCO2tIQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cbmltcG9ydCB7IEh0dHBUcmFja2luZ0VudGl0eSB9IGZyb20gJy4uL21vZGVsL2h0dHAtdHJhY2tpbmctZW50aXR5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFja2luZ0FjdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9uL2h0dHAtdHJhY2tpbmctYWN0aW9ucy5mYWN0b3J5JztcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4uL21vZGVsL2xvYWRpbmctc3RhdGUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZVxuaW50ZXJmYWNlIEh0dHBUcmFja2luZ1Jlc3VsdDxUMSwgVDI+IHt9XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwVHJhY2tpbmdGYWNhZGVTdHViIHtcbiAgICBwdWJsaWMgZ2V0VHJhY2tpbmcoYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG9mPEh0dHBUcmFja2luZ0VudGl0eT4oe1xuICAgICAgICAgICAgaHR0cFN0YXR1czogTG9hZGluZ1N0YXRlLklOSVQsXG4gICAgICAgICAgICBhY3Rpb246ICdbZmFrZV0gYWN0aW9uIDEyMycsXG4gICAgICAgICAgICB0YWdzOiBhY3Rpb25bJ3RhZ3MnXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTG9hZGluZzxUPihhY3Rpb246IEFjdGlvbikge1xuICAgICAgICByZXR1cm4gb2Y8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0xvYWRlZDxUPihhY3Rpb246IEFjdGlvbikge1xuICAgICAgICByZXR1cm4gb2Y8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW5pdDxUPihhY3Rpb246IEFjdGlvbik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gb2Y8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFcnJvcjxUPihhY3Rpb246IEFjdGlvbik6IE9ic2VydmFibGU8c3RyaW5nIHwgbnVsbD4ge1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyR2xvYmFsbHlIYW5kbGVkRXJyb3JzKCkge31cblxuICAgIHB1YmxpYyBjbGVhclRyYWNraW5nTXVsdGkoYWN0aW9uczogQWN0aW9uW10pIHt9XG5cbiAgICBwdWJsaWMgZ2V0R2xvYmFsTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIG9mPGJvb2xlYW4+KGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0R2xvYmFsRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gb2Y8RXJyb3JbXT4oW10pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXNvbHZlZDxUMSwgVDI+KGFjdGlvbjogVHJhY2tpbmdBY3Rpb248VDEsIFQyPikge1xuICAgICAgICByZXR1cm4gb2Y8SHR0cFRyYWNraW5nUmVzdWx0PFQxLCBUMj4+KCk7XG4gICAgfVxufVxuIl19