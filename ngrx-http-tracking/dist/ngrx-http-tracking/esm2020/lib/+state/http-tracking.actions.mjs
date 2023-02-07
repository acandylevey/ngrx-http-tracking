import { createAction, props } from '@ngrx/store';
const ACTIONS_NAMESPACE = 'Http Tracking';
export const trackHttpRequest = createAction(`[${ACTIONS_NAMESPACE}] TrackHttpRequest`, props());
export const clearGloballyHandledErrors = createAction(`[${ACTIONS_NAMESPACE}] ClearGloballyHandledErrors`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1odHRwLXRyYWNraW5nL3NyYy9saWIvK3N0YXRlL2h0dHAtdHJhY2tpbmcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsRCxNQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztBQUUxQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQzFDLElBQUksaUJBQWlCLG9CQUFvQixFQUN6QyxLQUFLLEVBQXNCLENBQzVCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxZQUFZLENBQ3BELElBQUksaUJBQWlCLDhCQUE4QixDQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBwcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgSHR0cFRyYWNraW5nRW50aXR5IH0gZnJvbSAnLi4vbW9kZWwvaHR0cC10cmFja2luZy1lbnRpdHknO1xyXG5cclxuY29uc3QgQUNUSU9OU19OQU1FU1BBQ0UgPSAnSHR0cCBUcmFja2luZyc7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhY2tIdHRwUmVxdWVzdCA9IGNyZWF0ZUFjdGlvbihcclxuICBgWyR7QUNUSU9OU19OQU1FU1BBQ0V9XSBUcmFja0h0dHBSZXF1ZXN0YCxcclxuICBwcm9wczxIdHRwVHJhY2tpbmdFbnRpdHk+KClcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckdsb2JhbGx5SGFuZGxlZEVycm9ycyA9IGNyZWF0ZUFjdGlvbihcclxuICBgWyR7QUNUSU9OU19OQU1FU1BBQ0V9XSBDbGVhckdsb2JhbGx5SGFuZGxlZEVycm9yc2BcclxuKTtcclxuIl19