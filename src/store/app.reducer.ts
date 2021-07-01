import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    auth: reducers.fromAuth.UserState,
    products: reducers.fromProduct.ProductsState,
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: reducers.fromAuth.reducer,
    products: reducers.fromProduct.reducer,
};

