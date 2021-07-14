import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingCart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import * as fromProducts from 'src/store/actions/products.actions';


export const featureKey = 'products';

export interface State {
    allProducts: Product[];
    shoppingCart: ShoppingCart;
    isLoading: boolean;
    succeeded: boolean;
    hasError: boolean;
    errors: string | any;
}

export const initialState: State = {
    allProducts: [],
    shoppingCart: null,
    isLoading: false,
    succeeded: false,
    hasError: false,
    errors: null
};

const productsReducer = createReducer(
    initialState,
    on(fromProducts.loadAllProducts,
        fromProducts.getShoppingCart,
        (state) => ({
            ...state,
            isLoading: true
        })),

    on(fromProducts.loadAllProductsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        succeeded: true,
        allProducts: [...action.products]
    })),

    on(fromProducts.getShoppingCartSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        succeeded: true,
        shoppingCart: { ...action.cart }
    })),

    on(fromProducts.loadAllProductsError,
        fromProducts.getShoppingCartFail,
        (state, { payload }) => ({
            ...state,
            isLoading: false,
            succeeded: false,
            hasError: true,
            errors: payload
        })),

    on(fromProducts.removeFromShoppingCart, (state, action) => ({
        ...state,
        isLoading: false,
        succeeded: true,
        shoppingCart: {
            products: [
                ...state.shoppingCart.products.filter(product => product.id !== action.productId)
            ],
            shipping: state.shoppingCart.shipping,
            subtotal: state.shoppingCart.subtotal,
            total: state.shoppingCart.total
        }
    })),

    on(fromProducts.addToShoppingCart, (state, action) => ({
        ...state,
        isLoading: false,
        succeeded: true,
        shoppingCart: {
            products: [
                ...state.shoppingCart.products,
                {
                    ...action.product,
                    color: action.product.colors[0]
                }
            ],
            shipping: state.shoppingCart.shipping,
            subtotal: state.shoppingCart.subtotal,
            total: state.shoppingCart.total
        }
    })),

    on(fromProducts.setIsFavorite, (state, action) => ({
        ...state,
        isLoading: false,
        succeeded: true,
        allProducts: state.allProducts.map(product => {
            if (product.id === action.productId) {
                return {
                    ...product,
                    is_favorite: action.isFavorite
                };
            }
            return product;
        })
    })),
);

export const reducer = (state: State | undefined, action: Action) => productsReducer(state, action);

export const isLoading = (state: State) => state.isLoading;
export const succeeded = (state: State) => state.succeeded;
export const hasError = (state: State) => state.hasError;
export const errorMessage = (state: State) => state.errors;
export const products = (state: State) => state.allProducts;
export const cart = (state: State) => state.shoppingCart;