import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../app/models/user.model';
import * as fromAuth from '../actions/auth.actions';


export interface UserState {
    user: User,
    loaded: boolean,
    error: any
}

export const userInitialState: UserState = {
    user: null,
    loaded: false,
    error: null
};

const userReducer = createReducer(
    userInitialState,
    on(fromAuth.loadUser, (state) => ({ ...state })),

    on(fromAuth.loadUserSuccess, (state, { user }) => ({
        ...state,
        loaded: true,
        user: { ...user }
    })),

    on(fromAuth.loadUserError, (state, { payload }) => ({
        ...state,
        loaded: false,
        error: payload
    })),
);

export function reducer(state: UserState, action: Action) {
    return userReducer(state, action);
}