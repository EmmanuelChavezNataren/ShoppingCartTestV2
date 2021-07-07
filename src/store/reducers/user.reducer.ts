import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../../app/models/user.model';
import * as fromActions from '../actions/user.actions';

export const featureKey = 'user';
export interface State {
    user: User,
    isLoading: boolean;
    hasError: boolean;
    succeeded: boolean;
    errors: string | any
}

export const initialState: State = {
    user: null,
    isLoading: false,
    hasError: false,
    succeeded: false,
    errors: null
};

const userReducer = createReducer(
    initialState,
    on(fromActions.loadUser, (state): State => ({
        ...state,
        isLoading: true
    })),

    on(fromActions.loadUserSuccess, (state, { user }): State => ({
        ...state,
        isLoading: false,
        succeeded: true,
        user: { ...user }
    })),

    on(fromActions.loadUserError, (state, { payload }): State => ({
        ...state,
        isLoading: false,
        succeeded: false,
        hasError: true,
        errors: payload
    })),
);

export function reducer(state: State, action: Action): State {
    return userReducer(state, action)
}

export const isLoading = (state: State) => state.isLoading;
export const succeeded = (state: State) => state.succeeded;
export const hasError = (state: State) => state.hasError;
export const errorMessage = (state: State) => state.errors;
export const user = (state: State) => state.user;

