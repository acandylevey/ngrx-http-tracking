import { LoadingState } from './loading-state';

export interface HttpTrackingEntity {
  httpStatus: LoadingState | Error;
  action: string;
  tags: string[];
}
