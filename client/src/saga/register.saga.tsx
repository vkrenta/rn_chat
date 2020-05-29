import { TAction, TCredentials } from '../types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGN_UP } from '../actions/action-types';
import register from '../api/register.api';
import errorHandler from './errorHandler';
import showToast from '../components/ShowToast';

function* worker(action: TAction<TCredentials>) {
  try {
    yield call(register, action.payload!);
    showToast({
      type: 'success',
      text: 'Confirmation link sended to your email',
    });
  } catch (e) {
    yield errorHandler(e);
  }
}

export default function* watchRegister() {
  yield takeEvery(SIGN_UP, worker);
}
