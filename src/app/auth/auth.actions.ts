import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUser = createAction('[User] Load User Profile');

export const loadUserSuccess = createAction(
    '[User] Load User Profile Success',
    props<{ user: User }>()
  );
  
  export const loadUserError= createAction(
    '[User] Load User Profile Error',
    props<{ payload: any }>()
  );
  