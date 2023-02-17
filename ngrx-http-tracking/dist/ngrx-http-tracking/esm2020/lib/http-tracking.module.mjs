import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpTrackingEffects } from './+state/http-tracking.effects';
import { HttpTrackingFacade } from './+state/http-tracking.facade';
import { httpTrackingReducer, HTTP_TRACKING_FEATURE_KEY, } from './+state/http-tracking.reducer';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
export class NgrxHttpTrackingModule {
}
NgrxHttpTrackingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgrxHttpTrackingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgrxHttpTrackingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.5", ngImport: i0, type: NgrxHttpTrackingModule, imports: [CommonModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] });
NgrxHttpTrackingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgrxHttpTrackingModule, providers: [HttpTrackingFacade], imports: [CommonModule,
        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
        EffectsModule.forFeature([HttpTrackingEffects])] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgrxHttpTrackingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
                        EffectsModule.forFeature([HttpTrackingEffects]),
                    ],
                    providers: [HttpTrackingFacade],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWh0dHAtdHJhY2tpbmcvc3JjL2xpYi9odHRwLXRyYWNraW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix5QkFBeUIsR0FDMUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQVV4QyxNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsWUFOL0IsWUFBWTtvSEFNSCxzQkFBc0IsYUFGdEIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUo3QixZQUFZO1FBQ1osV0FBVyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRSxtQkFBbUIsQ0FBQztRQUN0RSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzsyRkFJdEMsc0JBQXNCO2tCQVJsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVcsQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsbUJBQW1CLENBQUM7d0JBQ3RFLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3FCQUNoRDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBIdHRwVHJhY2tpbmdFZmZlY3RzIH0gZnJvbSAnLi8rc3RhdGUvaHR0cC10cmFja2luZy5lZmZlY3RzJztcclxuaW1wb3J0IHsgSHR0cFRyYWNraW5nRmFjYWRlIH0gZnJvbSAnLi8rc3RhdGUvaHR0cC10cmFja2luZy5mYWNhZGUnO1xyXG5pbXBvcnQge1xyXG4gIGh0dHBUcmFja2luZ1JlZHVjZXIsXHJcbiAgSFRUUF9UUkFDS0lOR19GRUFUVVJFX0tFWSxcclxufSBmcm9tICcuLytzdGF0ZS9odHRwLXRyYWNraW5nLnJlZHVjZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEhUVFBfVFJBQ0tJTkdfRkVBVFVSRV9LRVksIGh0dHBUcmFja2luZ1JlZHVjZXIpLFxyXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtIdHRwVHJhY2tpbmdFZmZlY3RzXSksXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtIdHRwVHJhY2tpbmdGYWNhZGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdyeEh0dHBUcmFja2luZ01vZHVsZSB7fVxyXG4iXX0=