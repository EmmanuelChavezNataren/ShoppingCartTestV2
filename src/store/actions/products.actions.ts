import { createAction, props } from '@ngrx/store';

import { Product } from '../../app/models/product.model';

export const enum ActionTypes {
  loadProducts = '[Products] Load All Products',
  loadProductsSuccess = '[Products] Load All ProductsSuccess',
  loadProductsFail = '[Products] Load All Products Fail',
}

export const loadAllProducts = createAction(ActionTypes.loadProducts);

export const loadAllProductsSuccess = createAction(
  ActionTypes.loadProductsSuccess,
  props<{ products: Product[] }>()
);

export const loadAllProductsError = createAction(
  ActionTypes.loadProductsFail,
  props<{ payload: string }>()
);