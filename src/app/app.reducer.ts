import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';

export interface AppState {
    auth: fromAuth.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: fromAuth.userReducer,
};