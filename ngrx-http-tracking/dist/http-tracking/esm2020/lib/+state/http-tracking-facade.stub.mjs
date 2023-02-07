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
}
HttpTrackingFacadeStub.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingFacadeStub, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpTrackingFacadeStub.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingFacadeStub });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingFacadeStub, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy1mYWNhZGUuc3R1Yi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2h0dHAtdHJhY2tpbmcvc3JjL2xpYi8rc3RhdGUvaHR0cC10cmFja2luZy1mYWNhZGUuc3R1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQU10RCxNQUFNLE9BQU8sc0JBQXNCO0lBQzFCLFdBQVcsQ0FBQyxNQUFXO1FBQzVCLE9BQU8sRUFBRSxDQUFxQjtZQUM1QixVQUFVLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDN0IsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUyxDQUFJLE1BQWM7UUFDaEMsT0FBTyxFQUFFLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLFFBQVEsQ0FBSSxNQUFjO1FBQy9CLE9BQU8sRUFBRSxDQUFVLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUksTUFBYztRQUM3QixPQUFPLEVBQUUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sUUFBUSxDQUFJLE1BQWM7UUFDL0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVNLDBCQUEwQixLQUFJLENBQUM7SUFFL0Isa0JBQWtCLENBQUMsT0FBaUIsSUFBRyxDQUFDO0lBRXhDLGdCQUFnQjtRQUNyQixPQUFPLEVBQUUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sZUFBZTtRQUNwQixPQUFPLEVBQUUsQ0FBVSxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sV0FBVyxDQUFTLE1BQThCO1FBQ3ZELE9BQU8sRUFBRSxFQUE4QixDQUFDO0lBQzFDLENBQUM7O21IQXZDVSxzQkFBc0I7dUhBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXHJcbmltcG9ydCB7IEh0dHBUcmFja2luZ0VudGl0eSB9IGZyb20gJy4uL21vZGVsL2h0dHAtdHJhY2tpbmctZW50aXR5JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYWNraW5nQWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb24vaHR0cC10cmFja2luZy1hY3Rpb25zLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICcuLi9tb2RlbC9sb2FkaW5nLXN0YXRlJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXHJcbmludGVyZmFjZSBIdHRwVHJhY2tpbmdSZXN1bHQ8VDEsIFQyPiB7fVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFRyYWNraW5nRmFjYWRlU3R1YiB7XHJcbiAgcHVibGljIGdldFRyYWNraW5nKGFjdGlvbjogYW55KSB7XHJcbiAgICByZXR1cm4gb2Y8SHR0cFRyYWNraW5nRW50aXR5Pih7XHJcbiAgICAgIGh0dHBTdGF0dXM6IExvYWRpbmdTdGF0ZS5JTklULFxyXG4gICAgICBhY3Rpb246ICdbZmFrZV0gYWN0aW9uIDEyMycsXHJcbiAgICAgIHRhZ3M6IGFjdGlvblsndGFncyddLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb2FkaW5nPFQ+KGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICByZXR1cm4gb2Y8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTG9hZGVkPFQ+KGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICByZXR1cm4gb2Y8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNJbml0PFQ+KGFjdGlvbjogQWN0aW9uKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gb2Y8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVycm9yPFQ+KGFjdGlvbjogQWN0aW9uKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJHbG9iYWxseUhhbmRsZWRFcnJvcnMoKSB7fVxyXG5cclxuICBwdWJsaWMgY2xlYXJUcmFja2luZ011bHRpKGFjdGlvbnM6IEFjdGlvbltdKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0R2xvYmFsTG9hZGluZygpIHtcclxuICAgIHJldHVybiBvZjxib29sZWFuPihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R2xvYmFsRXJyb3JzKCkge1xyXG4gICAgcmV0dXJuIG9mPEVycm9yW10+KFtdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSZXNvbHZlZDxUMSwgVDI+KGFjdGlvbjogVHJhY2tpbmdBY3Rpb248VDEsIFQyPikge1xyXG4gICAgcmV0dXJuIG9mPEh0dHBUcmFja2luZ1Jlc3VsdDxUMSwgVDI+PigpO1xyXG4gIH1cclxufVxyXG4iXX0=