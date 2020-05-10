import { combineReducers, AnyAction } from 'redux';
import toast from './toast.reducer';

const rootReducer = combineReducers({ toast });

export default rootReducer;
