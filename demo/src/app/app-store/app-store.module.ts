import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppEffects } from './+state/app.effects';
import { metaReducers, reducers } from './+state/app.reducers';
import { storeDevToolsImport } from './store-dev-tools-import';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    ...storeDevToolsImport,
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({
      routerState: !environment.production
        ? RouterState.Minimal
        : RouterState.Full,
    }),
  ],
})
export class AppStoreModule {}
