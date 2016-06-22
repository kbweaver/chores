import { combineReducers } from 'redux';
import chores from './chores';

const choresApp = combineReducers({
  chores
});

export default choresApp;
