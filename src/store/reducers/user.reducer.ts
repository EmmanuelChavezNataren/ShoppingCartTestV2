import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as fromActions from 'src/store/actions/user.actions';

export const featureKey = 'user';
export interface State {
    userInfo: User;
    isLoading: boolean;
    hasError: boolean;
    succeeded: boolean;
    errors: string | any;
}

export const initialState: State = {
    userInfo: null,
    isLoading: false,
    hasError: false,
    succeeded: false,
    errors: null
};

const userReducer = createReducer(
    initialState,
    on(fromActions.getUserError, (state): State => ({
        ...state,
        isLoading: true
    })),

    on(fromActions.getUserSuccess, (state, action): State => ({
        ...state,
        isLoading: false,
        succeeded: true,
        userInfo: { ...action.user }
    })),

    on(fromActions.getUserError, (state, action): State => ({
        ...state,
        isLoading: false,
        succeeded: false,
        hasError: true,
        errors: action.payload
    })),
);

export const reducer = (state: State, action: Action) => userReducer(state, action);

export const isLoading = (state: State) => state.isLoading;
export const succeeded = (state: State) => state.succeeded;
export const hasError = (state: State) => state.hasError;
export const errorMessage = (state: State) => state.errors;
export const user = (state: State) => state.userInfo;

