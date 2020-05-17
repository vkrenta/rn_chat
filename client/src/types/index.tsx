import { ReactNode, RefObject } from 'react';
import { AccessTokenMap } from 'react-native-fbsdk';

export type TRoundedInput = {
  placeholder?: string;
  secure?: boolean;
  icon?: any;
};

export type TFormButton = {
  onPress?: () => void;
};

export type TAction<T = undefined> = {
  type: string;
  payload?: T;
};

export type TCredentials = {
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
  userName?: string;
};

export type TGlobalState = {
  toast: string;
  credentials: TCredentials;
  fbAccessToken?: AccessTokenMap;
};

export type TFBGetRequest = {
  version?: string,
  path?: string,
  fields: Array<string>,
  accessToken: string
};