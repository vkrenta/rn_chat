import { ReactNode, RefObject } from 'react';

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
  password: string;
  userName: string;
};

export type TGlobalState = {
  toast: string;
};
