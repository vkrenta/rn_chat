import { TAction } from '../types';
import { SET_LOADER } from '../actions/action-types';

export default function loaderReducer(
  state: boolean = false,
  action: TAction<boolean>,
) {
  return action.type === SET_LOADER ? action.payload : state;
}
