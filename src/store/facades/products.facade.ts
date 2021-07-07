import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Product } from '../../app/models/product.model';
import * as fromActions from '../actions/products.actions';
import * as fromReducers from '../reducers/products.reducer';
import * as fromSelector from '../selectors/products.selectors';


@Injectable()
export class ProductsFacade {

    constructor(private store: Store<fromReducers.State>) { }

    get isLoading$(): Observable<boolean> {
        return this.store.select(fromSelector.getIsLoading);
    }
    get succeeded$(): Observable<boolean> {
        return this.store.select(fromSelector.getSucceeded);
    }
    get hasError$(): Observable<boolean> {
        return this.store.select(fromSelector.getHasError).pipe(filter((x) => x));
    }
    get error$(): Observable<any> {
        return this.store
            .select(fromSelector.getErrorMessage)
            .pipe(filter((x) => x));
    }

    get products$(): Observable<Product[]> {
        return this.store.select(fromSelector.getProducts).pipe(filter((x) => !!x));
    }

    getAllProducts() {
        this.store.dispatch(fromActions.loadAllProducts());
    }


}