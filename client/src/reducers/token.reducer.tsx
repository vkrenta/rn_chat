import { TAction } from '../types';
import { SET_TOKEN } from '../actions/action-types';

export default function tokenReducer(
  state: string | null = null,
  action: TAction<string>,
) {
  return action.type === SET_TOKEN ? action.payload : state;
}
