import React from 'react';
import { TAction } from 'src/types';
import { takeEvery, call } from 'redux-saga/effects';
import { SHOW_TOAST } from '../actions/action-types';
import Toast from '../components/Toast';

const toast = (message: string) => <Toast message={message} />;

function* worker(action: TAction<string>) {
  yield call(toast, action.payload!);
}

export default function* watchToast() {
  yield takeEvery(SHOW_TOAST, worker);
}
