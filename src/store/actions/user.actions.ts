import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const enum ActionTypes {
  loadUser = '[User] Load User Profile',
  loadUserSuccess = '[User] Load User Profile Success',
  loadUserFail = '[User] Load User Profile Error'

}

export const getUser = createAction(ActionTypes.loadUser);

export const getUserSuccess = createAction(
  ActionTypes.loadUserSuccess,
  props<{ user: User }>()
);

export const getUserError = createAction(
  ActionTypes.loadUserFail,
  props<{ payload: string }>()
);
