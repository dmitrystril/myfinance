import { combineReducers } from 'redux';

import expensesReducer from './feature/expenses/expensesSlice';
import incomeReducer from './feature/income/incomeSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  income: incomeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
