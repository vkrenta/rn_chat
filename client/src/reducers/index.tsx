import { combineReducers, AnyAction } from 'redux';
import rgCredentialsReducer from './rgcredentials.reducer';
import loaderReducer from './loader.reducer';
import tokenReducer from './token.reducer';

const rootReducer = combineReducers({
  rgCredentials: rgCredentialsReducer,
  loader: loaderReducer,
  token: tokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
