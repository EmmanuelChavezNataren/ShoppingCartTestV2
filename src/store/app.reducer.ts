import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    auth: reducers.UserState,
    products: reducers.ProductsState,
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: reducers.userReducer,
    products: reducers.productsReducer,
};

