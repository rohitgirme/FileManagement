import { combineReducers } from 'redux';
import FilesReducer from './FilesReducer';

const rootReducer = combineReducers({
  files: FilesReducer
});

export default rootReducer;
