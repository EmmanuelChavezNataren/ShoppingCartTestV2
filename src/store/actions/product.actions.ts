import { Product } from '../../app/models/product.model';
import { createAction, props } from '@ngrx/store';

export const enum ActionTypes {
    LOAD_PRODUCTS = '[Products] Load All Products',
    LOAD_PRODUCTS_SUCCESS = '[Products] Load All ProductsSuccess',
    LOAD_PRODUCTS_FAIL = '[Products] Load All Products Fail',
}

/**
 * Acci&oacute;n para cargar todos los productos
 */
 export const loadAllProducts = createAction(ActionTypes.LOAD_PRODUCTS);

 /**
  * Acci&oacute;n de success de la carga de todos los productos
  * @param products Objeto de la información del User
  */
 export const loadAllProductsSuccess = createAction(
    ActionTypes.LOAD_PRODUCTS_SUCCESS,
   props<{ products: Product[] }>()
 );
 
 /**
 * Acci&oacute;n de error de la carga de todos los productos
 * @param payload Objeto del error
 */
 export const loadAllProductsError = createAction(
    ActionTypes.LOAD_PRODUCTS_FAIL,
   props<{ payload: any }>()
 );