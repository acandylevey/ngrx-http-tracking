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
        this.trackHttpRequest$ = createEffect(() => this.actions$.pipe(filter((action) => action['httpStatus'] !== undefined && action.type !== trackHttpRequest.type), tap(action => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: HttpTrackingEffects, deps: [{ token: i1.Actions }, { token: i2.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: HttpTrackingEffects, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: HttpTrackingEffects, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.Store }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1odHRwLXRyYWNraW5nL3NyYy9saWIvK3N0YXRlL2h0dHAtdHJhY2tpbmcuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFLM0QsTUFBTSxPQUFPLG1CQUFtQjtJQWlDNUIsWUFBb0IsUUFBaUIsRUFBVSxLQUFZO1FBQXZDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBaEMzRCxzQkFBaUIsR0FBRyxZQUFZLENBQzVCLEdBQUcsRUFBRSxDQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNkLE1BQU0sQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUNwRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDVCxJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDNUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBQzlDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ2hEO2dCQUNFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUNkLDhFQUE4RSxFQUM5RSx1Q0FBdUMsQ0FDMUMsQ0FBQztpQkFDTDthQUNKO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsZ0JBQWdCLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUN2QixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNMLEVBQ0w7WUFDSSxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUNKLENBQUM7SUFFNEQsQ0FBQzs4R0FqQ3RELG1CQUFtQjtrSEFBbkIsbUJBQW1CLGNBRmhCLE1BQU07OzJGQUVULG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYXBBY3Rpb25UeXBlVG9JZCB9IGZyb20gJy4uL2Z1bmN0aW9uL21hcC1hY3Rpb24tdHlwLXRvLWlkJztcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4uL21vZGVsL2xvYWRpbmctc3RhdGUnO1xuaW1wb3J0IHsgdHJhY2tIdHRwUmVxdWVzdCB9IGZyb20gJy4vaHR0cC10cmFja2luZy5hY3Rpb25zJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFRyYWNraW5nRWZmZWN0cyB7XG4gICAgdHJhY2tIdHRwUmVxdWVzdCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChhY3Rpb246IGFueSkgPT4gYWN0aW9uWydodHRwU3RhdHVzJ10gIT09IHVuZGVmaW5lZCAmJiBhY3Rpb24udHlwZSAhPT0gdHJhY2tIdHRwUmVxdWVzdC50eXBlKSxcbiAgICAgICAgICAgICAgICB0YXAoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uWydodHRwU3RhdHVzJ10gPT09IExvYWRpbmdTdGF0ZS5MT0FERUQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFhY3Rpb24udHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdWNjZXNzJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFhY3Rpb24udHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdmYWlsdXJlJylcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJWNIVFRQIFJlcXVlc3QgTG9hZGluZyBUcmFja2VyIGNvdWxkIG5vdCBmaW5kIFN1Y2Nlc3MvRmFpbHVyZSBvbiBhY3Rpb24udHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiB5ZWxsb3c7IGZvbnQtc2l6ZTogbGFyZ2U7J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tIdHRwUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFN0YXR1czogYWN0aW9uWydodHRwU3RhdHVzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBtYXBBY3Rpb25UeXBlVG9JZChhY3Rpb24udHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogYWN0aW9uWyd0YWdzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXNwYXRjaDogZmFsc2UsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XG59XG4iXX0=