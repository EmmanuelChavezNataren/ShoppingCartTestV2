import { Action, createReducer, on } from '@ngrx/store';

import { Product } from '../../app/models/product.model';
import * as fromProducts from '../actions/products.actions';


export const featureKey = 'products';

export interface State {
    products: Product[],
    isLoading: boolean,
    succeeded: boolean
    hasError: boolean
    errors: string | any
}

export const initialState: State = {
    products: [],
    isLoading: false,
    succeeded: false,
    hasError: false,
    errors: null
};

const productsReducer = createReducer(
    initialState,
    on(fromProducts.loadAllProducts, (state) => ({
        ...state,
        isLoading: true
    })),

    on(fromProducts.loadAllProductsSuccess, (state, { products }) => ({
        ...state,
        isLoading: false,
        succeeded: true,
        products: [...products]
    })),

    on(fromProducts.loadAllProductsError, (state, { payload }) => ({
        ...state,
        isLoading: false,
        succeeded: false,
        hasError: true,
        errors: payload
    })),
);

export function reducer(state: State | undefined, action: Action): State {
    return productsReducer(state, action);
}

export const isLoading = (state: State) => state.isLoading;
export const succeeded = (state: State) => state.succeeded;
export const hasError = (state: State) => state.hasError;
export const errorMessage = (state: State) => state.errors;
export const products = (state: State) => state.products;


