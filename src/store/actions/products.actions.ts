import { createAction, props } from '@ngrx/store';
import { ShoppingCart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';

export const enum ActionTypes {
  loadProducts = '[Products] Load All Products',
  loadProductsSuccess = '[Products] Load All ProductsSuccess',
  loadProductsFail = '[Products] Load All Products Fail',
  loadShoppingCart = '[Cart] Load Shopping Cart',
  loadShoppingCartSuccess = '[Cart] Load Shopping Cart Success',
  loadShoppingCartFail = '[Cart] Load Shopping Cart Fail',
  removeProduct = '[Cart] Remove Product to Cart',
  addProduct = '[Cart] Add Product to Cart',
  isFavoriteProduct = '[Favorite] Add or Remove to Favorite'
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

//Shopping Cart
export const getShoppingCart = createAction(ActionTypes.loadShoppingCart);

export const getShoppingCartSuccess = createAction(
  ActionTypes.loadShoppingCartSuccess,
  props<{ cart: ShoppingCart }>()
);

export const getShoppingCartFail = createAction(
  ActionTypes.loadShoppingCartFail,
  props<{ payload: string }>()
);

export const removeFromShoppingCart = createAction(
  ActionTypes.removeProduct,
  props<{ productId: number }>()
);

export const addToShoppingCart = createAction(
  ActionTypes.addProduct,
  props<{ product: Product }>()
);

export const setIsFavorite = createAction(
  ActionTypes.isFavoriteProduct,
  props<{ productId: number, isFavorite: boolean }>()
);
