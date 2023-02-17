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
HttpTrackingFacadeStub.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpTrackingFacadeStub, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpTrackingFacadeStub.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpTrackingFacadeStub });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpTrackingFacadeStub, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy1mYWNhZGUuc3R1Yi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtaHR0cC10cmFja2luZy9zcmMvbGliLytzdGF0ZS9odHRwLXRyYWNraW5nLWZhY2FkZS5zdHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBTXRELE1BQU0sT0FBTyxzQkFBc0I7SUFDMUIsV0FBVyxDQUFDLE1BQVc7UUFDNUIsT0FBTyxFQUFFLENBQXFCO1lBQzVCLFVBQVUsRUFBRSxZQUFZLENBQUMsSUFBSTtZQUM3QixNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxTQUFTLENBQUksTUFBYztRQUNoQyxPQUFPLEVBQUUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sUUFBUSxDQUFJLE1BQWM7UUFDL0IsT0FBTyxFQUFFLENBQVUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU0sQ0FBSSxNQUFjO1FBQzdCLE9BQU8sRUFBRSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxRQUFRLENBQUksTUFBYztRQUMvQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sMEJBQTBCLEtBQUksQ0FBQztJQUUvQixrQkFBa0IsQ0FBQyxPQUFpQixJQUFHLENBQUM7SUFFeEMsZ0JBQWdCO1FBQ3JCLE9BQU8sRUFBRSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxlQUFlO1FBQ3BCLE9BQU8sRUFBRSxDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxXQUFXLENBQVMsTUFBOEI7UUFDdkQsT0FBTyxFQUFFLEVBQThCLENBQUM7SUFDMUMsQ0FBQzs7bUhBdkNVLHNCQUFzQjt1SEFBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cclxuaW1wb3J0IHsgSHR0cFRyYWNraW5nRW50aXR5IH0gZnJvbSAnLi4vbW9kZWwvaHR0cC10cmFja2luZy1lbnRpdHknO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhY2tpbmdBY3Rpb24gfSBmcm9tICcuLi9mdW5jdGlvbi9odHRwLXRyYWNraW5nLWFjdGlvbnMuZmFjdG9yeSc7XHJcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4uL21vZGVsL2xvYWRpbmctc3RhdGUnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2VcclxuaW50ZXJmYWNlIEh0dHBUcmFja2luZ1Jlc3VsdDxUMSwgVDI+IHt9XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwVHJhY2tpbmdGYWNhZGVTdHViIHtcclxuICBwdWJsaWMgZ2V0VHJhY2tpbmcoYWN0aW9uOiBhbnkpIHtcclxuICAgIHJldHVybiBvZjxIdHRwVHJhY2tpbmdFbnRpdHk+KHtcclxuICAgICAgaHR0cFN0YXR1czogTG9hZGluZ1N0YXRlLklOSVQsXHJcbiAgICAgIGFjdGlvbjogJ1tmYWtlXSBhY3Rpb24gMTIzJyxcclxuICAgICAgdGFnczogYWN0aW9uWyd0YWdzJ10sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0xvYWRpbmc8VD4oYWN0aW9uOiBBY3Rpb24pIHtcclxuICAgIHJldHVybiBvZjxib29sZWFuPihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb2FkZWQ8VD4oYWN0aW9uOiBBY3Rpb24pIHtcclxuICAgIHJldHVybiBvZjxib29sZWFuPih0cnVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0luaXQ8VD4oYWN0aW9uOiBBY3Rpb24pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBvZjxib29sZWFuPihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RXJyb3I8VD4oYWN0aW9uOiBBY3Rpb24pOiBPYnNlcnZhYmxlPHN0cmluZyB8IG51bGw+IHtcclxuICAgIHJldHVybiBvZihudWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckdsb2JhbGx5SGFuZGxlZEVycm9ycygpIHt9XHJcblxyXG4gIHB1YmxpYyBjbGVhclRyYWNraW5nTXVsdGkoYWN0aW9uczogQWN0aW9uW10pIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRHbG9iYWxMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIG9mPGJvb2xlYW4+KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRHbG9iYWxFcnJvcnMoKSB7XHJcbiAgICByZXR1cm4gb2Y8RXJyb3JbXT4oW10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlc29sdmVkPFQxLCBUMj4oYWN0aW9uOiBUcmFja2luZ0FjdGlvbjxUMSwgVDI+KSB7XHJcbiAgICByZXR1cm4gb2Y8SHR0cFRyYWNraW5nUmVzdWx0PFQxLCBUMj4+KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==