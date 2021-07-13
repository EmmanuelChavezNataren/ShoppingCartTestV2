import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiInteractionService } from 'src/repositories/api-interaction.repository';
import * as fromUser from 'src/store/actions/user.actions';

@Injectable()
export class UserEffect {

    getUser$ = createEffect(() => this.actions$.pipe(
            ofType(fromUser.getUser),
            switchMap(() => this.service.getUserProfile().pipe(
                map(user => fromUser.getUserSuccess({ user })),
                catchError(error => of(fromUser.getUserError({ payload: error }))))
            ),
        ));

    constructor(
        private actions$: Actions,
        private service: ApiInteractionService
    ) { }

}