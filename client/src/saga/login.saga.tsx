import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGN_IN, SET_TOKEN } from '../actions/action-types';
import errorHandler from './errorHandler';
import { TAction } from '../types';
import login from '../api/login.api';
import { setLoader } from '../actions';

function* worker(action: TAction<{ login: string; password: string }>) {
  try {
    yield put(setLoader(true));
    const { token } = yield call(login, action.payload!);
    yield put({ type: SET_TOKEN, payload: token });
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setLoader(false));
  }
}

export default function* watchSignIn() {
  yield takeEvery(SIGN_IN, worker);
}
