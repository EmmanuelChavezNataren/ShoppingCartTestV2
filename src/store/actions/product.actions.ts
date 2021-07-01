import { Product } from '../../app/models/product.model';
import { createAction, props } from '@ngrx/store';

export const enum ActionTypes {
    LOAD_PRODUCTS = '[Products] Load All Products',
    LOAD_PRODUCTS_SUCCESS = '[Products] Load All ProductsSuccess',
    LOAD_PRODUCTS_FAIL = '[Products] Load All Products Fail',
}

 export const loadAllProducts = createAction(ActionTypes.LOAD_PRODUCTS);

  export const loadAllProductsSuccess = createAction(
    ActionTypes.LOAD_PRODUCTS_SUCCESS,
   props<{ products: Product[] }>()
 );
 
 export const loadAllProductsError = createAction(
    ActionTypes.LOAD_PRODUCTS_FAIL,
   props<{ payload: any }>()
 );