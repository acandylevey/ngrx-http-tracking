import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpTrackingEffects } from './+state/http-tracking.effects';
import { HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer } from './+state/http-tracking.reducer';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
export class NgrxHttpTrackingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgrxHttpTrackingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.5", ngImport: i0, type: NgrxHttpTrackingModule, imports: [CommonModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgrxHttpTrackingModule, imports: [CommonModule,
            StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
            EffectsModule.forFeature([HttpTrackingEffects])] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgrxHttpTrackingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        StoreModule.forFeature(HTTP_TRACKING_FEATURE_KEY, httpTrackingReducer),
                        EffectsModule.forFeature([HttpTrackingEffects]),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC10cmFja2luZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWh0dHAtdHJhY2tpbmcvc3JjL2xpYi9odHRwLXRyYWNraW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFTaEcsTUFBTSxPQUFPLHNCQUFzQjs4R0FBdEIsc0JBQXNCOytHQUF0QixzQkFBc0IsWUFMM0IsWUFBWTsrR0FLUCxzQkFBc0IsWUFMM0IsWUFBWTtZQUNaLFdBQVcsQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsbUJBQW1CLENBQUM7WUFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7OzJGQUcxQyxzQkFBc0I7a0JBUGxDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRSxtQkFBbUIsQ0FBQzt3QkFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7cUJBQ2xEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEh0dHBUcmFja2luZ0VmZmVjdHMgfSBmcm9tICcuLytzdGF0ZS9odHRwLXRyYWNraW5nLmVmZmVjdHMnO1xuaW1wb3J0IHsgSFRUUF9UUkFDS0lOR19GRUFUVVJFX0tFWSwgaHR0cFRyYWNraW5nUmVkdWNlciB9IGZyb20gJy4vK3N0YXRlL2h0dHAtdHJhY2tpbmcucmVkdWNlcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoSFRUUF9UUkFDS0lOR19GRUFUVVJFX0tFWSwgaHR0cFRyYWNraW5nUmVkdWNlciksXG4gICAgICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbSHR0cFRyYWNraW5nRWZmZWN0c10pLFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhIdHRwVHJhY2tpbmdNb2R1bGUge31cbiJdfQ==