import { createEffect, ofType } from '@ngrx/effects';
import { props } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoadingState } from '../model/loading-state';
import { convertResponseToError } from './convert-response-to-error';
function createTrackingAction(type, hasGlobalTag, tags, httpStatus, config) {
    if (typeof config === 'function') {
        return defineType(type, (...args) => ({
            ...config(...args),
            type,
            httpStatus,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
        }));
    }
    const as = config ? config._as : 'empty';
    switch (as) {
        case 'empty':
            return defineType(type, () => ({
                type,
                httpStatus,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        case 'props':
            return defineType(type, 
            // eslint-disable-next-line @typescript-eslint/no-shadow
            (props) => ({
                ...props,
                type,
                httpStatus,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        default:
            throw new Error('Unexpected config.');
    }
}
function createTrackingFailureAction(type, hasGlobalTag, tags, httpStatus, config) {
    if (typeof config === 'function') {
        return defineType(type, (err, fallbackMsg, ...args) => ({
            httpStatus: httpStatus(err, fallbackMsg),
            ...config(...args),
            type,
            tags: hasGlobalTag ? ['global', ...tags] : [...tags],
        }));
    }
    const as = config ? config._as : 'empty';
    switch (as) {
        case 'empty':
            return defineType(type, (err, fallbackMsg) => ({
                httpStatus: httpStatus(err, fallbackMsg),
                type,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        case 'props':
            return defineType(type, 
            // eslint-disable-next-line @typescript-eslint/no-shadow
            (err, fallbackMsg, props) => ({
                httpStatus: httpStatus(err, fallbackMsg),
                ...props,
                type,
                tags: hasGlobalTag ? ['global', ...tags] : [...tags],
            }));
        default:
            throw new Error('Unexpected config.');
    }
}
function defineType(type, creator) {
    return Object.defineProperty(creator, 'type', {
        value: type,
        writable: false,
    });
}
export const createTrackingActions = (namespace, actionName, hasGlobalTag = true, tags = [namespace]) => ({
    loading: createTrackingAction(`[${namespace}] ${actionName}`, hasGlobalTag, tags, LoadingState.LOADING, props()),
    loaded: createTrackingAction(`[${namespace}] ${actionName}Success`, hasGlobalTag, tags, LoadingState.LOADED, props()),
    failure: createTrackingFailureAction(`[${namespace}] ${actionName}Failure`, hasGlobalTag, tags, convertResponseToError),
});
export const createTrackingEffect = (actions$, tackingAction, serviceCall, fallbackErrorMsg, 
// eslint-disable-next-line @typescript-eslint/no-empty-function
successFn = (httpContext) => { }) => createEffect(() => actions$.pipe(ofType(tackingAction.loading), switchMap((action) => serviceCall(action.request).pipe(map((payload) => tackingAction.loaded({ payload })), tap((successAction) => successFn({
    request: action.request,
    payload: successAction.payload,
})), catchError((e) => {
    console.error(e);
    const subjectMsg = new Subject();
    if (e.error instanceof Blob &&
        e.error.type === 'application/json') {
        e.error.text().then((errorBlobText) => {
            const errorJson = JSON.parse(errorBlobText);
            subjectMsg.next(tackingAction.failure(e, errorJson.error));
        });
    }
    else {
        return of(tackingAction.failure(e, fallbackErrorMsg));
    }
    return subjectMsg;
})))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy1hY3Rpb25zLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWh0dHAtdHJhY2tpbmcvc3JjL2xpYi9mdW5jdGlvbi9odHRwLXRyYWNraW5nLWFjdGlvbnMuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWtDLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9wRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBNkJyRSxTQUFTLG9CQUFvQixDQUMzQixJQUFPLEVBQ1AsWUFBcUIsRUFDckIsSUFBYyxFQUNkLFVBQXdCLEVBQ3hCLE1BQTZCO0lBRTdCLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO1FBQ2hDLE9BQU8sVUFBVSxDQUNmLElBQUksRUFDSixDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FDakIsQ0FBcUM7WUFDbkMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSTtZQUNKLFVBQVU7WUFDVixJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3JELENBQUEsQ0FDSixDQUFDO0tBQ0g7SUFDRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FB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LENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUNuRCxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUNwQixTQUFTLENBQUM7SUFDUixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87SUFDdkIsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPO0NBQy9CLENBQUMsQ0FDSCxFQUNELFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBRXpDLElBQ0UsQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJO1FBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFrQixFQUNuQztRQUNBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBcUIsRUFBRSxFQUFFO1lBQzVDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25DcmVhdG9yLCBDcmVhdG9yLCBwcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25DcmVhdG9yUHJvcHMsXHJcbiAgRnVuY3Rpb25XaXRoUGFyYW1ldGVyc1R5cGUsXHJcbiAgTm90QWxsb3dlZENoZWNrLFxyXG4gIFR5cGVkQWN0aW9uLFxyXG59IGZyb20gJ0BuZ3J4L3N0b3JlL3NyYy9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwVHJhY2tpbmdFbnRpdHkgfSBmcm9tICcuLi9tb2RlbC9odHRwLXRyYWNraW5nLWVudGl0eSc7XHJcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4uL21vZGVsL2xvYWRpbmctc3RhdGUnO1xyXG5pbXBvcnQgeyBjb252ZXJ0UmVzcG9uc2VUb0Vycm9yIH0gZnJvbSAnLi9jb252ZXJ0LXJlc3BvbnNlLXRvLWVycm9yJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRyYWNraW5nQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmc+KFxyXG4gIHR5cGU6IFQsXHJcbiAgaGFzR2xvYmFsVGFnOiBib29sZWFuLFxyXG4gIHRhZ3M6IHN0cmluZ1tdLFxyXG4gIGh0dHBTdGF0dXM6IExvYWRpbmdTdGF0ZVxyXG4pOiBBY3Rpb25DcmVhdG9yPFQsICgpID0+IFR5cGVkQWN0aW9uPFQ+PjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRyYWNraW5nQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBvYmplY3Q+KFxyXG4gIHR5cGU6IFQsXHJcbiAgaGFzR2xvYmFsVGFnOiBib29sZWFuLFxyXG4gIHRhZ3M6IHN0cmluZ1tdLFxyXG4gIGh0dHBTdGF0dXM6IExvYWRpbmdTdGF0ZSxcclxuICBjb25maWc6IEFjdGlvbkNyZWF0b3JQcm9wczxQPiB8IG51bGxcclxuKTogQWN0aW9uQ3JlYXRvcjxULCAocHJvcHM/OiBQKSA9PiBQICYgVHlwZWRBY3Rpb248VD4+O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHJhY2tpbmdBY3Rpb248XHJcbiAgVCBleHRlbmRzIHN0cmluZyxcclxuICBQIGV4dGVuZHMgYW55W10sXHJcbiAgUiBleHRlbmRzIG9iamVjdFxyXG4+KFxyXG4gIHR5cGU6IFQsXHJcbiAgaGFzR2xvYmFsVGFnOiBib29sZWFuLFxyXG4gIHRhZ3M6IHN0cmluZ1tdLFxyXG4gIGh0dHBTdGF0dXM6IExvYWRpbmdTdGF0ZSxcclxuICBjcmVhdG9yOiBDcmVhdG9yPFAsIFI+ICYgTm90QWxsb3dlZENoZWNrPFI+XHJcbik6IEZ1bmN0aW9uV2l0aFBhcmFtZXRlcnNUeXBlPFAsIFIgJiBUeXBlZEFjdGlvbjxUPj4gJiBUeXBlZEFjdGlvbjxUPjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRyYWNraW5nQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcsIEMgZXh0ZW5kcyBDcmVhdG9yPihcclxuICB0eXBlOiBULFxyXG4gIGhhc0dsb2JhbFRhZzogYm9vbGVhbixcclxuICB0YWdzOiBzdHJpbmdbXSxcclxuICBodHRwU3RhdHVzOiBMb2FkaW5nU3RhdGUsXHJcbiAgY29uZmlnPzogeyBfYXM6ICdwcm9wcycgfSB8IENcclxuKTogQWN0aW9uQ3JlYXRvcjxUPiB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBkZWZpbmVUeXBlKFxyXG4gICAgICB0eXBlLFxyXG4gICAgICAoLi4uYXJnczogYW55W10pID0+XHJcbiAgICAgICAgPEh0dHBUcmFja2luZ0VudGl0eSAmIFR5cGVkQWN0aW9uPFQ+PntcclxuICAgICAgICAgIC4uLmNvbmZpZyguLi5hcmdzKSxcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICBodHRwU3RhdHVzLFxyXG4gICAgICAgICAgdGFnczogaGFzR2xvYmFsVGFnID8gWydnbG9iYWwnLCAuLi50YWdzXSA6IFsuLi50YWdzXSxcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBhcyA9IGNvbmZpZyA/IGNvbmZpZy5fYXMgOiAnZW1wdHknO1xyXG4gIHN3aXRjaCAoYXMpIHtcclxuICAgIGNhc2UgJ2VtcHR5JzpcclxuICAgICAgcmV0dXJuIGRlZmluZVR5cGUoXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgPEh0dHBUcmFja2luZ0VudGl0eSAmIFR5cGVkQWN0aW9uPFQ+PntcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgaHR0cFN0YXR1cyxcclxuICAgICAgICAgICAgdGFnczogaGFzR2xvYmFsVGFnID8gWydnbG9iYWwnLCAuLi50YWdzXSA6IFsuLi50YWdzXSxcclxuICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIGNhc2UgJ3Byb3BzJzpcclxuICAgICAgcmV0dXJuIGRlZmluZVR5cGUoXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvd1xyXG4gICAgICAgIChwcm9wczogb2JqZWN0KSA9PlxyXG4gICAgICAgICAgPEh0dHBUcmFja2luZ0VudGl0eSAmIFR5cGVkQWN0aW9uPFQ+PntcclxuICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGh0dHBTdGF0dXMsXHJcbiAgICAgICAgICAgIHRhZ3M6IGhhc0dsb2JhbFRhZyA/IFsnZ2xvYmFsJywgLi4udGFnc10gOiBbLi4udGFnc10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29uZmlnLicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHJhY2tpbmdGYWlsdXJlQWN0aW9uPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcsXHJcbiAgZXJyIGV4dGVuZHMgYW55LFxyXG4gIGZhbGxiYWNrTXNnIGV4dGVuZHMgc3RyaW5nXHJcbj4oXHJcbiAgdHlwZTogVCxcclxuICBoYXNHbG9iYWxUYWc6IGJvb2xlYW4sXHJcbiAgdGFnczogc3RyaW5nW10sXHJcbiAgaHR0cFN0YXR1czogKGVycjogYW55LCBmYWxsYmFja01zZzogc3RyaW5nKSA9PiBFcnJvclxyXG4pOiBBY3Rpb25DcmVhdG9yPFQsIChlcnI6IGFueSwgZmFsbGJhY2tNc2c6IHN0cmluZykgPT4gVHlwZWRBY3Rpb248VD4+O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHJhY2tpbmdGYWlsdXJlQWN0aW9uPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcsXHJcbiAgZXJyIGV4dGVuZHMgYW55LFxyXG4gIGZhbGxiYWNrTXNnIGV4dGVuZHMgc3RyaW5nLFxyXG4gIFAgZXh0ZW5kcyBvYmplY3RcclxuPihcclxuICB0eXBlOiBULFxyXG4gIGhhc0dsb2JhbFRhZzogYm9vbGVhbixcclxuICB0YWdzOiBzdHJpbmdbXSxcclxuICBodHRwU3RhdHVzOiAoZXJyOiBhbnksIGZhbGxiYWNrTXNnOiBzdHJpbmcpID0+IEVycm9yLFxyXG4gIGNvbmZpZzogQWN0aW9uQ3JlYXRvclByb3BzPFA+ICYgTm90QWxsb3dlZENoZWNrPFA+XHJcbik6IEFjdGlvbkNyZWF0b3I8XHJcbiAgVCxcclxuICAoXHJcbiAgICBlcnI6IGFueSxcclxuICAgIGZhbGxiYWNrTXNnOiBzdHJpbmcsXHJcbiAgICBwcm9wczogUCAmIE5vdEFsbG93ZWRDaGVjazxQPlxyXG4gICkgPT4gUCAmIFR5cGVkQWN0aW9uPFQ+XHJcbj47XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUcmFja2luZ0ZhaWx1cmVBY3Rpb248VCBleHRlbmRzIHN0cmluZywgQyBleHRlbmRzIENyZWF0b3I+KFxyXG4gIHR5cGU6IFQsXHJcbiAgaGFzR2xvYmFsVGFnOiBib29sZWFuLFxyXG4gIHRhZ3M6IHN0cmluZ1tdLFxyXG4gIGh0dHBTdGF0dXM6IChlcnI6IGFueSwgZmFsbGJhY2tNc2c6IHN0cmluZykgPT4gRXJyb3IsXHJcbiAgY29uZmlnPzogeyBfYXM6ICdwcm9wcycgfSB8IENcclxuKTogQWN0aW9uQ3JlYXRvcjxUPiB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBkZWZpbmVUeXBlKFxyXG4gICAgICB0eXBlLFxyXG4gICAgICAoZXJyOiBhbnksIGZhbGxiYWNrTXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PlxyXG4gICAgICAgIDxIdHRwVHJhY2tpbmdFbnRpdHkgJiBUeXBlZEFjdGlvbjxUPj57XHJcbiAgICAgICAgICBodHRwU3RhdHVzOiBodHRwU3RhdHVzKGVyciwgZmFsbGJhY2tNc2cpLFxyXG4gICAgICAgICAgLi4uY29uZmlnKC4uLmFyZ3MpLFxyXG4gICAgICAgICAgdHlwZSxcclxuICAgICAgICAgIHRhZ3M6IGhhc0dsb2JhbFRhZyA/IFsnZ2xvYmFsJywgLi4udGFnc10gOiBbLi4udGFnc10sXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uc3QgYXMgPSBjb25maWcgPyBjb25maWcuX2FzIDogJ2VtcHR5JztcclxuICBzd2l0Y2ggKGFzKSB7XHJcbiAgICBjYXNlICdlbXB0eSc6XHJcbiAgICAgIHJldHVybiBkZWZpbmVUeXBlKFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgKGVycjogYW55LCBmYWxsYmFja01zZzogc3RyaW5nKSA9PlxyXG4gICAgICAgICAgPEh0dHBUcmFja2luZ0VudGl0eSAmIFR5cGVkQWN0aW9uPFQ+PntcclxuICAgICAgICAgICAgaHR0cFN0YXR1czogaHR0cFN0YXR1cyhlcnIsIGZhbGxiYWNrTXNnKSxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdGFnczogaGFzR2xvYmFsVGFnID8gWydnbG9iYWwnLCAuLi50YWdzXSA6IFsuLi50YWdzXSxcclxuICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIGNhc2UgJ3Byb3BzJzpcclxuICAgICAgcmV0dXJuIGRlZmluZVR5cGUoXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvd1xyXG4gICAgICAgIChlcnI6IGFueSwgZmFsbGJhY2tNc2c6IHN0cmluZywgcHJvcHM6IG9iamVjdCkgPT5cclxuICAgICAgICAgIDxIdHRwVHJhY2tpbmdFbnRpdHkgJiBUeXBlZEFjdGlvbjxUPj57XHJcbiAgICAgICAgICAgIGh0dHBTdGF0dXM6IGh0dHBTdGF0dXMoZXJyLCBmYWxsYmFja01zZyksXHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB0YWdzOiBoYXNHbG9iYWxUYWcgPyBbJ2dsb2JhbCcsIC4uLnRhZ3NdIDogWy4uLnRhZ3NdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNvbmZpZy4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZVR5cGU8VCBleHRlbmRzIHN0cmluZz4oXHJcbiAgdHlwZTogVCxcclxuICBjcmVhdG9yOiBDcmVhdG9yXHJcbik6IEFjdGlvbkNyZWF0b3I8VD4ge1xyXG4gIHJldHVybiA8QWN0aW9uQ3JlYXRvcjxUPj5PYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRvciwgJ3R5cGUnLCB7XHJcbiAgICB2YWx1ZTogdHlwZSxcclxuICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYWNraW5nQWN0aW9ucyA9IDxUUmVxdWVzdCwgVFBheWxvYWQ+KFxyXG4gIG5hbWVzcGFjZTogc3RyaW5nLFxyXG4gIGFjdGlvbk5hbWU6IHN0cmluZyxcclxuICBoYXNHbG9iYWxUYWcgPSB0cnVlLFxyXG4gIHRhZ3M6IHN0cmluZ1tdID0gW25hbWVzcGFjZV1cclxuKTogVHJhY2tpbmdBY3Rpb248VFJlcXVlc3QsIFRQYXlsb2FkPiA9PiAoe1xyXG4gIGxvYWRpbmc6IGNyZWF0ZVRyYWNraW5nQWN0aW9uKFxyXG4gICAgYFske25hbWVzcGFjZX1dICR7YWN0aW9uTmFtZX1gLFxyXG4gICAgaGFzR2xvYmFsVGFnLFxyXG4gICAgdGFncyxcclxuICAgIExvYWRpbmdTdGF0ZS5MT0FESU5HLFxyXG4gICAgcHJvcHM8eyByZXF1ZXN0OiBUUmVxdWVzdCB9PigpXHJcbiAgKSxcclxuICBsb2FkZWQ6IGNyZWF0ZVRyYWNraW5nQWN0aW9uKFxyXG4gICAgYFske25hbWVzcGFjZX1dICR7YWN0aW9uTmFtZX1TdWNjZXNzYCxcclxuICAgIGhhc0dsb2JhbFRhZyxcclxuICAgIHRhZ3MsXHJcbiAgICBMb2FkaW5nU3RhdGUuTE9BREVELFxyXG4gICAgcHJvcHM8eyBwYXlsb2FkOiBUUGF5bG9hZCB9PigpXHJcbiAgKSxcclxuICBmYWlsdXJlOiBjcmVhdGVUcmFja2luZ0ZhaWx1cmVBY3Rpb24oXHJcbiAgICBgWyR7bmFtZXNwYWNlfV0gJHthY3Rpb25OYW1lfUZhaWx1cmVgLFxyXG4gICAgaGFzR2xvYmFsVGFnLFxyXG4gICAgdGFncyxcclxuICAgIGNvbnZlcnRSZXNwb25zZVRvRXJyb3JcclxuICApLFxyXG59KTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tpbmdBY3Rpb248VFJlcXVlc3QsIFRQYXlsb2FkPiB7XHJcbiAgbG9hZGluZzogKChhdHRyPzoge1xyXG4gICAgcmVxdWVzdDogVFJlcXVlc3Q7XHJcbiAgfSkgPT4geyByZXF1ZXN0OiBUUmVxdWVzdCB9ICYgVHlwZWRBY3Rpb248c3RyaW5nPikgJlxyXG4gICAgVHlwZWRBY3Rpb248c3RyaW5nPjtcclxuICBsb2FkZWQ6ICgoYXR0cj86IHtcclxuICAgIHBheWxvYWQ6IFRQYXlsb2FkO1xyXG4gIH0pID0+IHsgcGF5bG9hZDogVFBheWxvYWQgfSAmIFR5cGVkQWN0aW9uPHN0cmluZz4pICZcclxuICAgIFR5cGVkQWN0aW9uPHN0cmluZz47XHJcbiAgZmFpbHVyZTogQWN0aW9uQ3JlYXRvcjxcclxuICAgIHN0cmluZyxcclxuICAgIChodHRwU3RhdHVzOiBFcnJvciwgZmFsbGJhY2tFcnJvck1zZzogc3RyaW5nKSA9PiBUeXBlZEFjdGlvbjxzdHJpbmc+XHJcbiAgPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYWNraW5nRWZmZWN0ID0gPFRSZXF1ZXN0LCBUUGF5bG9hZD4oXHJcbiAgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcbiAgdGFja2luZ0FjdGlvbjogVHJhY2tpbmdBY3Rpb248VFJlcXVlc3QsIFRQYXlsb2FkPixcclxuICBzZXJ2aWNlQ2FsbDogKHJlcXVlc3Q6IFRSZXF1ZXN0KSA9PiBPYnNlcnZhYmxlPFRQYXlsb2FkPixcclxuICBmYWxsYmFja0Vycm9yTXNnOiBzdHJpbmcsXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxyXG4gIHN1Y2Nlc3NGbjogKGh0dHBDb250ZXh0OiB7IHJlcXVlc3Q6IFRSZXF1ZXN0OyBwYXlsb2FkOiBUUGF5bG9hZCB9KSA9PiB2b2lkID0gKFxyXG4gICAgaHR0cENvbnRleHRcclxuICApID0+IHt9XHJcbikgPT5cclxuICBjcmVhdGVFZmZlY3QoKCkgPT5cclxuICAgIGFjdGlvbnMkLnBpcGUoXHJcbiAgICAgIG9mVHlwZSh0YWNraW5nQWN0aW9uLmxvYWRpbmcpLFxyXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbikgPT5cclxuICAgICAgICBzZXJ2aWNlQ2FsbChhY3Rpb24ucmVxdWVzdCkucGlwZShcclxuICAgICAgICAgIG1hcCgocGF5bG9hZCkgPT4gdGFja2luZ0FjdGlvbi5sb2FkZWQoeyBwYXlsb2FkIH0pKSxcclxuICAgICAgICAgIHRhcCgoc3VjY2Vzc0FjdGlvbikgPT5cclxuICAgICAgICAgICAgc3VjY2Vzc0ZuKHtcclxuICAgICAgICAgICAgICByZXF1ZXN0OiBhY3Rpb24ucmVxdWVzdCxcclxuICAgICAgICAgICAgICBwYXlsb2FkOiBzdWNjZXNzQWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJqZWN0TXNnID0gbmV3IFN1YmplY3Q8QWN0aW9uPigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGUuZXJyb3IgaW5zdGFuY2VvZiBCbG9iICYmXHJcbiAgICAgICAgICAgICAgZS5lcnJvci50eXBlID09PSAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgZS5lcnJvci50ZXh0KCkudGhlbigoZXJyb3JCbG9iVGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckpzb24gPSBKU09OLnBhcnNlKGVycm9yQmxvYlRleHQpO1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdE1zZy5uZXh0KHRhY2tpbmdBY3Rpb24uZmFpbHVyZShlLCBlcnJvckpzb24uZXJyb3IpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gb2YodGFja2luZ0FjdGlvbi5mYWlsdXJlKGUsIGZhbGxiYWNrRXJyb3JNc2cpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3ViamVjdE1zZztcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKTtcclxuIl19