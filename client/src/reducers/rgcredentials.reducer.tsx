import { RGCredentials, TAction } from '../types';
import { SET_CREDENTIALS } from '../actions/action-types';

export default function rgCredentialsReducer(
  state: RGCredentials = { email: '', firstName: '', lastName: '' },
  action: TAction<RGCredentials>,
) {
  return action.type === SET_CREDENTIALS ? action.payload : state;
}
