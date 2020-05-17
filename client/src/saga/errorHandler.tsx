import { put } from 'redux-saga/effects';
import { showToast } from '../actions';

export default function* errorHandler(e: Error) {
  let result;
  try{
    result = JSON.parse(e.message);
  } catch (E) {
    result = e.message || E.message;
  }
  yield put(showToast(result));
};