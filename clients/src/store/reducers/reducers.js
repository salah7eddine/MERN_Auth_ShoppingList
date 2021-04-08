import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  item: itemsReducer,
  error: errorReducer,
});
