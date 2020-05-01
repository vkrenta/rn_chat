import { TCredentials, TAction } from 'src/types';
import { SIGN_UP, SHOW_TOAST } from './action-types';

export const signUp = (credentials: TCredentials): TAction<TCredentials> => ({
  type: SIGN_UP,
  payload: credentials,
});

export const showToast = (message: string): TAction<string> => ({
  type: SHOW_TOAST,
  payload: message,
});
