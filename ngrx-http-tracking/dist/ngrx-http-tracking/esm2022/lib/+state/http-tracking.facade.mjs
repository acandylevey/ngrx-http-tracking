import * as HttpTrackingActions from './http-tracking.actions';
import * as HttpTrackingSelectors from './http-tracking.selectors';
import { debounceTime, filter, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { isError } from '../function/is-error';
import { mapActionTypeToId } from '../function/map-action-typ-to-id';
import { LoadingState } from '../model/loading-state';
import { isDefined } from '../function/is-defined';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class HttpTrackingFacade {
    constructor(store) {
        this.store = store;
    }
    getTracking(action) {
        return this.store.select(HttpTrackingSelectors.selectOneHttpTracking(mapActionTypeToId(action.loading.type)));
    }
    isLoading(action) {
        return this.getTracking(action).pipe(map((x) => x?.httpStatus === LoadingState.LOADING));
    }
    isLoaded(action) {
        return this.getTracking(action).pipe(map((x) => x?.httpStatus === LoadingState.LOADED));
    }
    isInit(action) {
        return this.getTracking(action).pipe(map((x) => !isDefined(x) || x?.httpStatus === LoadingState.INIT));
    }
    getError(action) {
        return this.getTracking(action).pipe(filter((x) => isError(x?.httpStatus)), map((x) => (x?.httpStatus).message));
    }
    isTagLoading(tag) {
        return this.store
            .select(HttpTrackingSelectors.selectLoadingByTag(tag))
            .pipe(debounceTime(100));
    }
    getTagErrors(tag) {
        return this.store
            .select(HttpTrackingSelectors.selectErrorsByTag(tag))
            .pipe(debounceTime(100));
    }
    clearGloballyHandledErrors() {
        this.store.dispatch(HttpTrackingActions.clearGloballyHandledErrors());
    }
    clearTrackingMulti(actions) {
        actions.forEach((action) => {
            this.store.dispatch(HttpTrackingActions.trackHttpRequest({
                action: mapActionTypeToId(action.type),
                httpStatus: LoadingState.INIT,
                tags: action['tags'],
            }));
        });
    }
    getGlobalLoading() {
        return this.store
            .select(HttpTrackingSelectors.selectLoadingByTag('global'))
            .pipe(debounceTime(300));
    }
    getGlobalErrors() {
        return this.store
            .select(HttpTrackingSelectors.selectErrorsByTag('global'))
            .pipe(debounceTime(300));
    }
    getResolved(action) {
        return this.getTracking(action).pipe(filter((tracking) => !!tracking), map((tracking) => tracking.httpStatus), filter((httpStatus) => httpStatus === LoadingState.LOADED || isError(httpStatus)), take(1), map((httpStatus) => {
            const retVal = {
                action,
                success: httpStatus === LoadingState.LOADED,
            };
            if (isError(httpStatus)) {
                retVal.error = httpStatus;
            }
            return retVal;
        }));
    }
    getMultiResolved(actions) {
        const results = actions.map((a) => this.getResolved(a));
        return forkJoin(results);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacade, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: HttpTrackingFacade, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Store }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5mYWNhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWh0dHAtdHJhY2tpbmcvc3JjL2xpYi8rc3RhdGUvaHR0cC10cmFja2luZy5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLG1CQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sS0FBSyxxQkFBcUIsTUFBTSwyQkFBMkIsQ0FBQztBQUduRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTbkQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFFN0IsV0FBVyxDQUNoQixNQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN0QixxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FDekMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDdkMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLFNBQVMsQ0FDZCxNQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNs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LENBQ2xDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUNoQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFzQixRQUFTLENBQUMsVUFBVSxDQUFDLEVBQzVELE1BQU0sQ0FDSixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQ2IsVUFBVSxLQUFLLFlBQVksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUM1RCxFQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNqQixNQUFNLE1BQU0sR0FBK0I7Z0JBQ3pDLE1BQU07Z0JBQ04sT0FBTyxFQUFFLFVBQVUsS0FBSyxZQUFZLENBQUMsTUFBTTthQUM1QyxDQUFDO1lBQ0YsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxnQkFBZ0IsQ0FDckIsT0FBaUM7UUFFakMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7OEdBL0dVLGtCQUFrQjtrSEFBbEIsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgSHR0cFRyYWNraW5nQWN0aW9ucyBmcm9tICcuL2h0dHAtdHJhY2tpbmcuYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIEh0dHBUcmFja2luZ1NlbGVjdG9ycyBmcm9tICcuL2h0dHAtdHJhY2tpbmcuc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgSHR0cFRyYWNraW5nRW50aXR5IH0gZnJvbSAnLi4vbW9kZWwvaHR0cC10cmFja2luZy1lbnRpdHknO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGlzRXJyb3IgfSBmcm9tICcuLi9mdW5jdGlvbi9pcy1lcnJvcic7XHJcbmltcG9ydCB7IG1hcEFjdGlvblR5cGVUb0lkIH0gZnJvbSAnLi4vZnVuY3Rpb24vbWFwLWFjdGlvbi10eXAtdG8taWQnO1xyXG5pbXBvcnQgeyBUcmFja2luZ0FjdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9uL2h0dHAtdHJhY2tpbmctYWN0aW9ucy5mYWN0b3J5JztcclxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnLi4vbW9kZWwvbG9hZGluZy1zdGF0ZSc7XHJcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4uL2Z1bmN0aW9uL2lzLWRlZmluZWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIdHRwVHJhY2tpbmdSZXN1bHQ8VDEsIFQyPiB7XHJcbiAgYWN0aW9uOiBUcmFja2luZ0FjdGlvbjxUMSwgVDI+O1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBFcnJvcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFRyYWNraW5nRmFjYWRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgcHVibGljIGdldFRyYWNraW5nPFQxLCBUMj4oXHJcbiAgICBhY3Rpb246IFRyYWNraW5nQWN0aW9uPFQxLCBUMj5cclxuICApOiBPYnNlcnZhYmxlPEh0dHBUcmFja2luZ0VudGl0eSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KFxyXG4gICAgICBIdHRwVHJhY2tpbmdTZWxlY3RvcnMuc2VsZWN0T25lSHR0cFRyYWNraW5nKFxyXG4gICAgICAgIG1hcEFjdGlvblR5cGVUb0lkKGFjdGlvbi5sb2FkaW5nLnR5cGUpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb2FkaW5nPFQxLCBUMj4oXHJcbiAgICBhY3Rpb246IFRyYWNraW5nQWN0aW9uPFQxLCBUMj5cclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmdldFRyYWNraW5nKGFjdGlvbikucGlwZShcclxuICAgICAgbWFwKCh4KSA9PiB4Py5odHRwU3RhdHVzID09PSBMb2FkaW5nU3RhdGUuTE9BRElORylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb2FkZWQ8VDEsIFQyPihhY3Rpb246IFRyYWNraW5nQWN0aW9uPFQxLCBUMj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmdldFRyYWNraW5nKGFjdGlvbikucGlwZShcclxuICAgICAgbWFwKCh4KSA9PiB4Py5odHRwU3RhdHVzID09PSBMb2FkaW5nU3RhdGUuTE9BREVEKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0luaXQ8VDEsIFQyPihhY3Rpb246IFRyYWNraW5nQWN0aW9uPFQxLCBUMj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmdldFRyYWNraW5nKGFjdGlvbikucGlwZShcclxuICAgICAgbWFwKCh4KSA9PiAhaXNEZWZpbmVkKHgpIHx8IHg/Lmh0dHBTdGF0dXMgPT09IExvYWRpbmdTdGF0ZS5JTklUKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFcnJvcjxUMSwgVDI+KFxyXG4gICAgYWN0aW9uOiBUcmFja2luZ0FjdGlvbjxUMSwgVDI+XHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUcmFja2luZyhhY3Rpb24pLnBpcGUoXHJcbiAgICAgIGZpbHRlcigoeCkgPT4gaXNFcnJvcih4Py5odHRwU3RhdHVzKSksXHJcbiAgICAgIG1hcCgoeCkgPT4gKDxFcnJvcj54Py5odHRwU3RhdHVzKS5tZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RhZ0xvYWRpbmcodGFnOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlXHJcbiAgICAgIC5zZWxlY3QoSHR0cFRyYWNraW5nU2VsZWN0b3JzLnNlbGVjdExvYWRpbmdCeVRhZyh0YWcpKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VGFnRXJyb3JzKHRhZzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxyXG4gICAgICAuc2VsZWN0KEh0dHBUcmFja2luZ1NlbGVjdG9ycy5zZWxlY3RFcnJvcnNCeVRhZyh0YWcpKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJHbG9iYWxseUhhbmRsZWRFcnJvcnMoKSB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKEh0dHBUcmFja2luZ0FjdGlvbnMuY2xlYXJHbG9iYWxseUhhbmRsZWRFcnJvcnMoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJUcmFja2luZ011bHRpKGFjdGlvbnM6IEFjdGlvbltdKSB7XHJcbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgSHR0cFRyYWNraW5nQWN0aW9ucy50cmFja0h0dHBSZXF1ZXN0KHtcclxuICAgICAgICAgIGFjdGlvbjogbWFwQWN0aW9uVHlwZVRvSWQoYWN0aW9uLnR5cGUpLFxyXG4gICAgICAgICAgaHR0cFN0YXR1czogTG9hZGluZ1N0YXRlLklOSVQsXHJcbiAgICAgICAgICB0YWdzOiBhY3Rpb25bJ3RhZ3MnXSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R2xvYmFsTG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlXHJcbiAgICAgIC5zZWxlY3QoSHR0cFRyYWNraW5nU2VsZWN0b3JzLnNlbGVjdExvYWRpbmdCeVRhZygnZ2xvYmFsJykpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRHbG9iYWxFcnJvcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxyXG4gICAgICAuc2VsZWN0KEh0dHBUcmFja2luZ1NlbGVjdG9ycy5zZWxlY3RFcnJvcnNCeVRhZygnZ2xvYmFsJykpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSZXNvbHZlZDxUMSwgVDI+KFxyXG4gICAgYWN0aW9uOiBUcmFja2luZ0FjdGlvbjxUMSwgVDI+XHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwVHJhY2tpbmdSZXN1bHQ8VDEsIFQyPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VHJhY2tpbmcoYWN0aW9uKS5waXBlKFxyXG4gICAgICBmaWx0ZXIoKHRyYWNraW5nKSA9PiAhIXRyYWNraW5nKSxcclxuICAgICAgbWFwKCh0cmFja2luZykgPT4gKDxIdHRwVHJhY2tpbmdFbnRpdHk+dHJhY2tpbmcpLmh0dHBTdGF0dXMpLFxyXG4gICAgICBmaWx0ZXIoXHJcbiAgICAgICAgKGh0dHBTdGF0dXMpID0+XHJcbiAgICAgICAgICBodHRwU3RhdHVzID09PSBMb2FkaW5nU3RhdGUuTE9BREVEIHx8IGlzRXJyb3IoaHR0cFN0YXR1cylcclxuICAgICAgKSxcclxuICAgICAgdGFrZSgxKSxcclxuICAgICAgbWFwKChodHRwU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0VmFsID0gPEh0dHBUcmFja2luZ1Jlc3VsdDxUMSwgVDI+PntcclxuICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGh0dHBTdGF0dXMgPT09IExvYWRpbmdTdGF0ZS5MT0FERUQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNFcnJvcihodHRwU3RhdHVzKSkge1xyXG4gICAgICAgICAgcmV0VmFsLmVycm9yID0gaHR0cFN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldFZhbDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TXVsdGlSZXNvbHZlZDxUMSwgVDI+KFxyXG4gICAgYWN0aW9uczogVHJhY2tpbmdBY3Rpb248VDEsIFQyPltdXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwVHJhY2tpbmdSZXN1bHQ8VDEsIFQyPltdPiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYWN0aW9ucy5tYXAoKGEpID0+IHRoaXMuZ2V0UmVzb2x2ZWQoYSkpO1xyXG4gICAgcmV0dXJuIGZvcmtKb2luKHJlc3VsdHMpO1xyXG4gIH1cclxufVxyXG4iXX0=