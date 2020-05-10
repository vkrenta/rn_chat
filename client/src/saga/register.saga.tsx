import { TAction, TCredentials } from 'src/types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGN_UP } from '../actions/action-types';
import register from '../api/register.api';
import { showToast } from '../actions';

function* worker(action: TAction<TCredentials>) {
  try {
    // console.log(action.payload);
    yield put(showToast(JSON.stringify(action.payload)));
    const { payload }: { payload: string } = yield call(
      register,
      action.payload!,
    );
    // yield put(showToast(payload));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchRegister() {
  yield takeEvery(SIGN_UP, worker);
}
