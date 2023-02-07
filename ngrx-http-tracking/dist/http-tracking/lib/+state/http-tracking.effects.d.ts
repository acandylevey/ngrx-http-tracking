import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export declare class HttpTrackingEffects {
    private actions$;
    private store;
    trackHttpRequest$: import("rxjs").Observable<any> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpTrackingEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpTrackingEffects>;
}
