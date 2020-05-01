import { TAction } from 'src/types';
import { takeEvery, call } from 'redux-saga/effects';
import { SHOW_TOAST } from '../actions/action-types';

const toast = (message: string) => console.log(message);

function* worker(action: TAction<string>) {
  yield call(toast, action.payload!);
}

export default function* watchToast() {
  yield takeEvery(SHOW_TOAST, worker);
}
