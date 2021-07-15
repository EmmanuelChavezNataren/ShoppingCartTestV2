import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiInteractionService } from 'src/repositories/api-interaction.repository';
import * as fromProducts from 'src/store/actions/products.actions';

@Injectable()
export class ProductsEffect {

    loadAllProducts$ = createEffect(() => this.actions$.pipe(
        ofType(fromProducts.loadAllProducts),
        switchMap(() => this.service.getAllProducts().pipe(
            map(products => fromProducts.loadAllProductsSuccess({ products })),
            catchError(error => of(fromProducts.loadAllProductsError({ payload: error }))))
        ),
    ));

    getShoppingCart$ = createEffect(() => this.actions$.pipe(
        ofType(fromProducts.getShoppingCart),
        switchMap(() => this.service.getShoppingCart().pipe(
            map(cart => fromProducts.getShoppingCartSuccess({ cart })),
            catchError(error => of(fromProducts.getShoppingCartFail({ payload: error }))))
        ),
    ));

    constructor(
        private actions$: Actions,
        private service: ApiInteractionService
    ) { }

}