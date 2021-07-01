import { Action, createReducer, on } from "@ngrx/store";
import { Product } from '../../app/models/product.model';
import * as fromProducts from '../actions/product.actions';


export interface ProductsState{
    products: Product[],
    isLoading: boolean,
    hasError: boolean
    error: any
}

export const productsInitialState: ProductsState = {
    products: [],
    isLoading: false,
    hasError: false,
    error: null
};

const _productsReducer = createReducer(
    productsInitialState,
    on(fromProducts.loadAllProducts, (state) => ({ ...state })),

    on(fromProducts.loadAllProductsSuccess, (state, { products }) => ({ 
        ...state,
        isLoading: true,
        products: [...products]
    })),

    on(fromProducts.loadAllProductsError, (state, { payload }) => ({ 
        ...state,
        isLoading: false,
        hasError: true,
        error: payload
    })),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return _productsReducer(state, action);
}

