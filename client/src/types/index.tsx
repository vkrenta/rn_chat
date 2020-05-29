import { ReactNode, RefObject } from 'react';

export type TRoundedInput = {
  placeholder?: string;
  secure?: boolean;
  icon?: any;
  onChange?: () => any;
  value?: string;
};

export type TFormButton = {
  onPress?: () => void;
  disabled?: boolean;
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

export type RGCredentials = {
  firstName: string;
  lastName: string;
  email: string;
} | null;

export type TGlobalState = {
  toast: string;
};
