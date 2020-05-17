import { TAction, TGlobalState, TCredentials } from '../types';
import { INIT_FB_REQUEST } from '../actions/action-types';

const initialState = {
  firstName: "",
  lastName: "",
  email: ""
};

const fbData = (
  state = initialState,
  action: TAction<TCredentials>
): TGlobalState | TCredentials => {
  switch (action.type) {
    case INIT_FB_REQUEST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default fbData;