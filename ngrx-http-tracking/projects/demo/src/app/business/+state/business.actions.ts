import { createAction } from '@ngrx/store';
import { createTrackingActions } from 'ngrx-http-tracking';
import { BusinessEntity } from './business.models';

const BUSINESS_NAMESPACE = 'business';
export const fetchbusiness = createTrackingActions<void, BusinessEntity[]>(BUSINESS_NAMESPACE, 'fetchBusiness');

export const clearbusiness = createAction(`[${BUSINESS_NAMESPACE}] clearBusiness`);
