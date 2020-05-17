import { combineReducers, AnyAction } from 'redux';
import toast from './toast.reducer';
import fbAccessToken from './fbAccessToken.reducer';
import fbData from './fbData.reducer';

const rootReducer = combineReducers({ 
  toast,
  fbAccessToken,
  credentials: fbData
});

export default rootReducer;