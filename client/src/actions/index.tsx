import { TCredentials, TAction, RGCredentials } from '../types';
import {
  SIGN_UP,
  SHOW_TOAST,
  CLEAR_TOAST,
  SET_CREDENTIALS,
} from './action-types';

export const signUp = (credentials: TCredentials): TAction<TCredentials> => ({
  type: SIGN_UP,
  payload: credentials,
});

export const showToast = (message: string): TAction<string> => ({
  type: SHOW_TOAST,
  payload: message,
});

export const clearToast = (): TAction => ({ type: CLEAR_TOAST });

export const setCredentials = (
  payload: RGCredentials,
): TAction<RGCredentials> => ({
  type: SET_CREDENTIALS,
  payload,
});
