import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';
import TransactionType from '../../../../type/TransactionType';

type ExpensesState = {
  expensesTransactions: TransactionType[];
  isLoading: boolean;
};

const initialState: ExpensesState = {
  expensesTransactions: [],
  isLoading: false,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    getExpensesDataRequest(state) {
      state.isLoading = true;
    },
    getExpensesDataSuccess(state, action) {
      state.expensesTransactions = action.payload.data;
      state.isLoading = false;
    },
    getExpensesDataFailed(state) {
      state.isLoading = false;
    },
  }
});

export default expensesSlice.reducer;

export const getExpensesData = () => {
  const PATH = `${Endpoint.EXPENSES}`;
  const TYPES = extractActionTypes(expensesSlice.actions);

  return axiosGet(PATH, TYPES);
};
