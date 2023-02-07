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
export class HttpTrackingModule {
}
HttpTrackingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HttpTrackingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingModule, imports: [CommonModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] });
HttpTrackingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingModule, providers: [HttpTrackingFacade], imports: [CommonModule,
        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
        EffectsModule.forFeature([HttpTrackingEffects])] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: HttpTrackingModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9odHRwLXRyYWNraW5nL3NyYy9saWIvaHR0cC10cmFja2luZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFVeEMsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLFlBTjNCLFlBQVk7Z0hBTUgsa0JBQWtCLGFBRmxCLENBQUMsa0JBQWtCLENBQUMsWUFKN0IsWUFBWTtRQUNaLFdBQVcsQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsbUJBQW1CLENBQUM7UUFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7MkZBSXRDLGtCQUFrQjtrQkFSOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLG1CQUFtQixDQUFDO3dCQUN0RSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztxQkFDaEQ7b0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgSHR0cFRyYWNraW5nRWZmZWN0cyB9IGZyb20gJy4vK3N0YXRlL2h0dHAtdHJhY2tpbmcuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEh0dHBUcmFja2luZ0ZhY2FkZSB9IGZyb20gJy4vK3N0YXRlL2h0dHAtdHJhY2tpbmcuZmFjYWRlJztcclxuaW1wb3J0IHtcclxuICBodHRwVHJhY2tpbmdSZWR1Y2VyLFxyXG4gIEhUVFBfVFJBQ0tJTkdfRkVBVFVSRV9LRVksXHJcbn0gZnJvbSAnLi8rc3RhdGUvaHR0cC10cmFja2luZy5yZWR1Y2VyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShIVFRQX1RSQUNLSU5HX0ZFQVRVUkVfS0VZLCBodHRwVHJhY2tpbmdSZWR1Y2VyKSxcclxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbSHR0cFRyYWNraW5nRWZmZWN0c10pLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbSHR0cFRyYWNraW5nRmFjYWRlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBUcmFja2luZ01vZHVsZSB7fVxyXG4iXX0=