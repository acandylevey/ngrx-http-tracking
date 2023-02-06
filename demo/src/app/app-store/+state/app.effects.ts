import { Actions } from '@ngrx/effects';

import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions) {}
}
