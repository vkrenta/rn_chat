import { TAction, TGlobalState } from '../types';
import { UPDATE_FB_TOKEN } from '../actions/action-types';
import { AccessTokenMap } from 'react-native-fbsdk';

const initialState: AccessTokenMap = {
  accessToken: "",
  applicationID: "",
  userID: "",
  permissions: [],
  declinedPermissions: [],
  expiredPermissions: [],
  accessTokenSource: undefined,
  expirationTime: 0,
  lastRefreshTime: 0,
  dataAccessExpirationTime: 0
};

const fbAccessToken = (
  state = initialState,
  action: TAction<AccessTokenMap>
): TGlobalState | AccessTokenMap => {
  switch (action.type) {
    case UPDATE_FB_TOKEN:
      return { ...state,  ...action.payload };
    default:
      return state;
  }
};

export default fbAccessToken;