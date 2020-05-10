import { TAction } from '../types';
import { SHOW_TOAST, CLEAR_TOAST } from '../actions/action-types';

const toast = (
  state = null,
  action: TAction<string>,
): string | null | undefined => {
  switch (action.type) {
    case SHOW_TOAST:
      return action.payload;
    case CLEAR_TOAST:
      return null;
    default:
      return state;
  }
};

export default toast;
