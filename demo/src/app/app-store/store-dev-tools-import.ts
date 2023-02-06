import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const storeDevToolsImport = [
  !environment.production ? StoreDevtoolsModule.instrument() : [],
];
