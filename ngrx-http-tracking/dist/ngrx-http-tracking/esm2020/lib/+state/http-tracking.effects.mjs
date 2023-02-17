import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { filter, tap } from 'rxjs/operators';
import { mapActionTypeToId } from '../function/map-action-typ-to-id';
import { LoadingState } from '../model/loading-state';
import { trackHttpRequest } from './http-tracking.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "@ngrx/store";
export class HttpTrackingEffects {
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        this.trackHttpRequest$ = createEffect(() => this.actions$.pipe(filter((action) => action['httpStatus'] !== undefined &&
            action.type !== trackHttpRequest.type), tap((action) => {
            if (action['httpStatus'] === LoadingState.LOADED &&
                !action.type.toLowerCase().includes('success') &&
                !action.type.toLowerCase().includes('failure')) {
                if (window && window.console) {
                    window.console.log('%cHTTP Request Loading Tracker could not find Success/Failure on action.type', 'background: yellow; font-size: large;');
                }
            }
            this.store.dispatch(trackHttpRequest({
                httpStatus: action['httpStatus'],
                action: mapActionTypeToId(action.type),
                tags: action['tags'],
            }));
        })), {
            dispatch: false,
        });
    }
}
HttpTrackingEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpTrackingEffects, deps: [{ token: i1.Actions }, { token: i2.Store }], target: i0.ɵɵFactoryTarget.Injectable });
HttpTrackingEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpTrackingEffects, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpTrackingEffects, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.Store }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1odHRwLXRyYWNraW5nL3NyYy9saWIvK3N0YXRlL2h0dHAtdHJhY2tpbmcuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFLM0QsTUFBTSxPQUFPLG1CQUFtQjtJQXFDOUIsWUFBb0IsUUFBaUIsRUFBVSxLQUFZO1FBQXZDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBcEMzRCxzQkFBaUIsR0FBRyxZQUFZLENBQzlCLEdBQUcsRUFBRSxDQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQ0osQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFTO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUN4QyxFQUNELEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2IsSUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssWUFBWSxDQUFDLE1BQU07Z0JBQzVDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUM5QyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUM5QztnQkFDQSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDaEIsOEVBQThFLEVBQzlFLHVDQUF1QyxDQUN4QyxDQUFDO2lCQUNIO2FBQ0Y7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsZ0JBQWdCLENBQUM7Z0JBQ2YsVUFBVSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNyQixDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILEVBQ0g7WUFDRSxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUNGLENBQUM7SUFFNEQsQ0FBQzs7Z0hBckNwRCxtQkFBbUI7b0hBQW5CLG1CQUFtQixjQUZsQixNQUFNOzJGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG1hcEFjdGlvblR5cGVUb0lkIH0gZnJvbSAnLi4vZnVuY3Rpb24vbWFwLWFjdGlvbi10eXAtdG8taWQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICcuLi9tb2RlbC9sb2FkaW5nLXN0YXRlJztcclxuaW1wb3J0IHsgdHJhY2tIdHRwUmVxdWVzdCB9IGZyb20gJy4vaHR0cC10cmFja2luZy5hY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwVHJhY2tpbmdFZmZlY3RzIHtcclxuICB0cmFja0h0dHBSZXF1ZXN0JCA9IGNyZWF0ZUVmZmVjdChcclxuICAgICgpID0+XHJcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgICAgICBmaWx0ZXIoXHJcbiAgICAgICAgICAoYWN0aW9uOiBhbnkpID0+XHJcbiAgICAgICAgICAgIGFjdGlvblsnaHR0cFN0YXR1cyddICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgYWN0aW9uLnR5cGUgIT09IHRyYWNrSHR0cFJlcXVlc3QudHlwZVxyXG4gICAgICAgICksXHJcbiAgICAgICAgdGFwKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgYWN0aW9uWydodHRwU3RhdHVzJ10gPT09IExvYWRpbmdTdGF0ZS5MT0FERUQgJiZcclxuICAgICAgICAgICAgIWFjdGlvbi50eXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3N1Y2Nlc3MnKSAmJlxyXG4gICAgICAgICAgICAhYWN0aW9uLnR5cGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZmFpbHVyZScpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuY29uc29sZSkge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICclY0hUVFAgUmVxdWVzdCBMb2FkaW5nIFRyYWNrZXIgY291bGQgbm90IGZpbmQgU3VjY2Vzcy9GYWlsdXJlIG9uIGFjdGlvbi50eXBlJyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiB5ZWxsb3c7IGZvbnQtc2l6ZTogbGFyZ2U7J1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICB0cmFja0h0dHBSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICBodHRwU3RhdHVzOiBhY3Rpb25bJ2h0dHBTdGF0dXMnXSxcclxuICAgICAgICAgICAgICBhY3Rpb246IG1hcEFjdGlvblR5cGVUb0lkKGFjdGlvbi50eXBlKSxcclxuICAgICAgICAgICAgICB0YWdzOiBhY3Rpb25bJ3RhZ3MnXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgIHtcclxuICAgICAgZGlzcGF0Y2g6IGZhbHNlLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG59XHJcbiJdfQ==