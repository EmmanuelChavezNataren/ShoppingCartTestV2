import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ApiInteractionService } from '../../repositories/api-interaction.repository';
import * as fromProducts from '../actions/products.actions';

@Injectable()
export class ProductsEffect {

    loadAllProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromProducts.loadAllProducts),
            switchMap(() => this.service.getAllProducts().pipe(
                map(products => fromProducts.loadAllProductsSuccess({ products })),
                catchError(error => of(fromProducts.loadAllProductsError({ payload: error }))))
            ),
        );
    });

    constructor(
        private actions$: Actions,
        private service: ApiInteractionService
    ) { }

}