import { LoadingState } from './loading-sate.enum';
export interface HttpTrackingEntity {
  httpStatus: LoadingState | Error;
  action: string;
  tags: string[];
}
