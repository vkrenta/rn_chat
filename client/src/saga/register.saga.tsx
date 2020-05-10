import { TAction, TCredentials } from 'src/types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGN_UP } from '../actions/action-types';
import register from '../api/register.api';
import { showToast } from '../actions';
import errorHandler from './errorHandler';

function* worker(action: TAction<TCredentials>) {
  try {
    yield call(register, action.payload!);
  } catch (e) {
    yield errorHandler(e);
  }
}

export default function* watchRegister() {
  yield takeEvery(SIGN_UP, worker);
}
