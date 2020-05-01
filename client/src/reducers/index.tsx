import { combineReducers, AnyAction } from 'redux';

const emptyReducer = (state = '', action: any) => {
  switch (action.type) {
    default:
      return '';
  }
};

const rootReducer = combineReducers({ emptyReducer });

export default rootReducer;
