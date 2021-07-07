import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ApiInteractionService } from '../../repositories/api-interaction.repository';
import * as fromUser from '../actions/user.actions';

@Injectable()
export class UserEffect {

    getUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromUser.loadUser),
            switchMap(() => this.service.getUserProfile().pipe(
                map(user => fromUser.loadUserSuccess({ user })),
                catchError(error => of(fromUser.loadUserError({ payload: error }))))
            ),
        );
    });

    constructor(
        private actions$: Actions,
        private service: ApiInteractionService
    ) { }

}