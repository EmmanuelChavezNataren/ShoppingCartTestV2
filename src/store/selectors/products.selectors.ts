import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from 'src/store/reducers/products.reducer';

const getState = createFeatureSelector<fromReducer.State>(
    fromReducer.featureKey
);

const getPageState = createSelector(getState, (state) => state);

export const getIsLoading = createSelector(getPageState, fromReducer.isLoading);
export const getSucceeded = createSelector(getPageState, fromReducer.succeeded);
export const getHasError = createSelector(getPageState, fromReducer.hasError);
export const getErrorMessage = createSelector(getPageState, fromReducer.errorMessage);

export const getProducts = createSelector(getPageState, fromReducer.products);
export const getShoppingCart = createSelector(getPageState, fromReducer.cart);