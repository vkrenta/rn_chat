import { combineReducers, AnyAction } from 'redux';
import toast from './toast.reducer';
import rgCredentialsReducer from './rgcredentials.reducer';

const rootReducer = combineReducers({
  toast,
  rgCredentials: rgCredentialsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
