import { TCredentials, TAction } from 'src/types';
import { SIGN_UP, SHOW_TOAST, CLEAR_TOAST, SIGN_UP_FB, UPDATE_FB_TOKEN, INIT_FB_REQUEST } from './action-types';
import { AccessTokenMap } from 'react-native-fbsdk';

export const signUp = (credentials: TCredentials): TAction<TCredentials> => ({
  type: SIGN_UP,
  payload: credentials,
});

export const signUpFb = (): TAction<any> => ({
  type: SIGN_UP_FB
});

export const updateFbAccessToken = (accessToken: AccessTokenMap): TAction<AccessTokenMap> => ({
  type: UPDATE_FB_TOKEN,
  payload: accessToken
});

export const initFbRequest = (credentials: TCredentials): TAction<TCredentials> => ({
  type: INIT_FB_REQUEST,
  payload: credentials
});

export const showToast = (message: string): TAction<string> => ({
  type: SHOW_TOAST,
  payload: message,
});

export const clearToast = (): TAction => ({ type: CLEAR_TOAST });