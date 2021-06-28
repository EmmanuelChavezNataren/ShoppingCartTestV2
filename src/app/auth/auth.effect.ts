import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiInteractionService } from '../services/api-interaction.service';
import * as fromAuth from './auth.actions';

@Injectable()
export class AuthEffect {

    constructor(
        private actions$: Actions,
        private apiSource: ApiInteractionService
    ) { }

    /**
     * Efecto para consultar API getUserProfile()
     */
    loadUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuth.loadUser),
            mergeMap(() =>
                this.apiSource.getUserProfile().pipe(
                    map(user => fromAuth.loadUserSuccess({ user })),
                    catchError(error => of(fromAuth.loadUserError({ payload: error }))))
            ),
        );
    });

}