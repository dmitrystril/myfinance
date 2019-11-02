import { combineReducers } from 'redux';

import income from './income';
import expenses from './expenses';

export default combineReducers({
  income,
  expenses,
});
