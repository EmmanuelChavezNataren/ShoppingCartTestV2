import { createAction, props } from '@ngrx/store';

import { User } from '../../app/models/user.model';

export const enum ActionTypes {
  loadUser = '[User] Load User Profile',
  loadUserSuccess = '[User] Load User Profile Success',
  loadUserFail = '[User] Load User Profile Error'

}

export const loadUser = createAction(ActionTypes.loadUser);

export const loadUserSuccess = createAction(
  ActionTypes.loadUserSuccess,
  props<{ user: User }>()
);

export const loadUserError = createAction(
  ActionTypes.loadUserFail,
  props<{ payload: string }>()
);
