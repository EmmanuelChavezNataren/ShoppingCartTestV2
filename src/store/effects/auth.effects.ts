import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ApiInteractionService } from '../../app/services/api-interaction.service';
import * as fromAuth from '../actions/auth.actions';

@Injectable()
export class AuthEffect {

    constructor(
        private actions$: Actions,
        private apiSource: ApiInteractionService
    ) { }

    loadUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuth.loadUser),
            switchMap(() => this.apiSource.getUserProfile().pipe(
                map(user => fromAuth.loadUserSuccess({ user })),
                catchError(error => of(fromAuth.loadUserError({ payload: error }))))
            ),
        );
    });

}