import { combineReducers, AnyAction } from 'redux';
import rgCredentialsReducer from './rgcredentials.reducer';
import loaderReducer from './loader.reducer';

const rootReducer = combineReducers({
  rgCredentials: rgCredentialsReducer,
  loader: loaderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
