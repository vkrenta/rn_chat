import { TCredentials, TAction, RGCredentials } from '../types';
import { SIGN_UP, SET_CREDENTIALS, SET_LOADER, SIGN_IN } from './action-types';

export const signUp = (credentials: TCredentials): TAction<TCredentials> => ({
  type: SIGN_UP,
  payload: credentials,
});

export const setCredentials = (
  payload: RGCredentials,
): TAction<RGCredentials> => ({
  type: SET_CREDENTIALS,
  payload,
});

export const setLoader = (payload: boolean): TAction<boolean> => ({
  type: SET_LOADER,
  payload,
});

export const signIn = (payload: {
  userName?: string;
  email?: string;
  password?: string;
}): TAction<{ userName?: string; email?: string; password?: string }> => ({
  type: SIGN_IN,
  payload,
});
