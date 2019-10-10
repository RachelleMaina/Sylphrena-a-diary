import { combineReducers } from 'redux';
import { listEntriesReducer } from '../reducers/entry';

const rootReducer = combineReducers({
  listEntries: listEntriesReducer
});
export default rootReducer;
