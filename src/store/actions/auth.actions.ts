import { createAction, props } from '@ngrx/store';
import { User } from '../../app/models/user.model';

/**
 * Acci&oacute;n de cargar perfil del usuario
 */
export const loadUser = createAction('[User] Load User Profile');

/**
 * Acci&oacute;n de success de la carga del perfil del usuario
 * @param user Objeto de la información del User
 */
export const loadUserSuccess = createAction(
  '[User] Load User Profile Success',
  props<{ user: User }>()
);

/**
* Acci&oacute;n de error de cargar perfil del usuario
* @param payload Objeto del error
*/
export const loadUserError = createAction(
  '[User] Load User Profile Error',
  props<{ payload: any }>()
);
