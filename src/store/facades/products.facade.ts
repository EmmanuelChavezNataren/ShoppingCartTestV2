import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import * as fromActions from 'src/store/actions/products.actions';
import * as fromReducers from 'src/store/reducers/products.reducer';
import * as fromSelector from 'src/store/selectors/products.selectors';



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

    get shoppingCart$(): Observable<ShoppingCart> {
        return this.store.select(fromSelector.getShoppingCart).pipe(filter((x) => !!x));
    }

    getAllProducts() {
        this.store.dispatch(fromActions.loadAllProducts());
    }

    getShoppingCart() {
        this.store.dispatch(fromActions.getShoppingCart());
    }

    removeFromShoppingCart(productId: number) {
        this.store.dispatch(fromActions.removeFromShoppingCart({ productId }));
    }




}