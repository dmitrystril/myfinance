import { combineReducers } from 'redux';

import expensesReducer from './feature/expenses/expensesSlice';
import incomeReducer from './feature/income/incomeSlice';
import taxesReducer from './feature/taxes/taxesSlice';
import billsReducer from './feature/bills/billsSlice';
import reportReducer from './feature/reports/reportsSlice';
import uploadReducer from './feature/upload/uploadSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  income: incomeReducer,
  taxes: taxesReducer,
  bills: billsReducer,
  report: reportReducer,
  upload: uploadReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
