import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from "rxjs/operators";
import * as fromProducts from '../actions/product.actions';
import { ApiInteractionService } from '../../app/services/api-interaction.service';
import { of } from "rxjs";

@Injectable()
export class ProductsEffect {

    constructor(
        private actions$: Actions,
        private apiSource: ApiInteractionService
    ){}

    loadAllProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromProducts.loadAllProducts),
            mergeMap(() =>
                this.apiSource.getAllProducts().pipe(
                    map(products => fromProducts.loadAllProductsSuccess({ products })),
                    catchError(error => of(fromProducts.loadAllProductsError({ payload: error }))))
            ),
        );
    });

}