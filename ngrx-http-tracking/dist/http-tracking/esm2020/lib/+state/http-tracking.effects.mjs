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
HttpTrackingEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingEffects, deps: [{ token: i1.Actions }, { token: i2.Store }], target: i0.ɵɵFactoryTarget.Injectable });
HttpTrackingEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingEffects, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingEffects, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.Store }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaHR0cC10cmFja2luZy9zcmMvbGliLytzdGF0ZS9odHRwLXRyYWNraW5nLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBSzNELE1BQU0sT0FBTyxtQkFBbUI7SUFxQzlCLFlBQW9CLFFBQWlCLEVBQVUsS0FBWTtRQUF2QyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQXBDM0Qsc0JBQWlCLEdBQUcsWUFBWSxDQUM5QixHQUFHLEVBQUUsQ0FDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUNKLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FDZCxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUztZQUNsQyxNQUFNLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FDeEMsRUFDRCxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNiLElBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNO2dCQUM1QyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFDOUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDOUM7Z0JBQ0EsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLDhFQUE4RSxFQUM5RSx1Q0FBdUMsQ0FDeEMsQ0FBQztpQkFDSDthQUNGO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLGdCQUFnQixDQUFDO2dCQUNmLFVBQVUsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDdEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDckIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxFQUNIO1lBQ0UsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FDRixDQUFDO0lBRTRELENBQUM7O2dIQXJDcEQsbUJBQW1CO29IQUFuQixtQkFBbUIsY0FGbEIsTUFBTTsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBtYXBBY3Rpb25UeXBlVG9JZCB9IGZyb20gJy4uL2Z1bmN0aW9uL21hcC1hY3Rpb24tdHlwLXRvLWlkJztcclxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnLi4vbW9kZWwvbG9hZGluZy1zdGF0ZSc7XHJcbmltcG9ydCB7IHRyYWNrSHR0cFJlcXVlc3QgfSBmcm9tICcuL2h0dHAtdHJhY2tpbmcuYWN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFRyYWNraW5nRWZmZWN0cyB7XHJcbiAgdHJhY2tIdHRwUmVxdWVzdCQgPSBjcmVhdGVFZmZlY3QoXHJcbiAgICAoKSA9PlxyXG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKFxyXG4gICAgICAgICAgKGFjdGlvbjogYW55KSA9PlxyXG4gICAgICAgICAgICBhY3Rpb25bJ2h0dHBTdGF0dXMnXSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGFjdGlvbi50eXBlICE9PSB0cmFja0h0dHBSZXF1ZXN0LnR5cGVcclxuICAgICAgICApLFxyXG4gICAgICAgIHRhcCgoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFjdGlvblsnaHR0cFN0YXR1cyddID09PSBMb2FkaW5nU3RhdGUuTE9BREVEICYmXHJcbiAgICAgICAgICAgICFhY3Rpb24udHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdWNjZXNzJykgJiZcclxuICAgICAgICAgICAgIWFjdGlvbi50eXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2ZhaWx1cmUnKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmNvbnNvbGUpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAnJWNIVFRQIFJlcXVlc3QgTG9hZGluZyBUcmFja2VyIGNvdWxkIG5vdCBmaW5kIFN1Y2Nlc3MvRmFpbHVyZSBvbiBhY3Rpb24udHlwZScsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogeWVsbG93OyBmb250LXNpemU6IGxhcmdlOydcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgICAgdHJhY2tIdHRwUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgaHR0cFN0YXR1czogYWN0aW9uWydodHRwU3RhdHVzJ10sXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBtYXBBY3Rpb25UeXBlVG9JZChhY3Rpb24udHlwZSksXHJcbiAgICAgICAgICAgICAgdGFnczogYWN0aW9uWyd0YWdzJ10sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICB7XHJcbiAgICAgIGRpc3BhdGNoOiBmYWxzZSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxufVxyXG4iXX0=