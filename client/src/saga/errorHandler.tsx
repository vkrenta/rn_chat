import { put } from 'redux-saga/effects';
import { clearToast, showToast } from '../actions';

export default function* errorHandler(e: Error) {
  const result = JSON.parse(e.message);
  yield put(showToast(e.message));
}
