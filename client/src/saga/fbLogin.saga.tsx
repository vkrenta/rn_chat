import { takeEvery, put } from 'redux-saga/effects';
import {LoginManager, AccessToken, AccessTokenMap} from 'react-native-fbsdk';
import errorHandler from './errorHandler';
import { SIGN_UP_FB } from '../actions/action-types';
import { showToast, updateFbAccessToken, initFbRequest } from '../actions';
import fbGetRequest from '../api/fbGetRequest';
import { TCredentials } from '../types';

function* worker() {
  try{
    let result = yield LoginManager.logInWithPermissions([
      'public_profile',
      'email'
    ]);

    if (result.isCancelled) {
      yield put(showToast("Login cancelled"));
    } else {
      const data: AccessTokenMap = yield AccessToken.getCurrentAccessToken();
      yield put(updateFbAccessToken(data));
      const credentials: TCredentials = yield fbGetRequest({
        accessToken: data.accessToken,
        fields: ["email", "first_name", "last_name"]
      });
      yield put(initFbRequest(credentials));
    }
  } catch (e) {
    yield errorHandler(e);
  }
};

export default function* watchFbLogin() {
  yield takeEvery(SIGN_UP_FB, worker);
};