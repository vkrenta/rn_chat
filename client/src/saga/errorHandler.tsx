import { put } from 'redux-saga/effects';
import showToast from '../components/ShowToast';

export default function* errorHandler(e: Error) {
  console.log(e);
  let result;
  try {
    result = JSON.parse(e.message);
  } catch (E) {
    result = e.message || E.message;
  }
  showToast({ text: result.message, type: 'danger' });
}
