export type Message = {
  key: string;
  text: string;
  from: string;
  date: string;
};

export const SIGN_UP = 'SIGN_UP';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const SET_LOADER = 'SET_LOADER';
export const SIGN_IN = 'SIGN_IN';
export const SET_TOKEN = 'SET_TOKEN';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
