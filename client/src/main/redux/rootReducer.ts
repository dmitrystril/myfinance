import { combineReducers } from 'redux';

import expensesReducer from './feature/expenses/expensesSlice';
import incomeReducer from './feature/income/incomeSlice';
import uploadReducer from './feature/upload/uploadSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  income: incomeReducer,
  upload: uploadReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
