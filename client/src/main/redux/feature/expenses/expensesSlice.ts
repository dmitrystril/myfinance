import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet, axiosPost } from '../../middleware/api';
import TransactionType from '../../../../type/TransactionType';
import CategoyEnum from '../../../component/common/CategoryEnum';

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

    setCategoryRequest() { },
    setCategorySuccess(state, action) {
      const updatedTransaction = action.payload.data;
      const transactionIndex = state.expensesTransactions.findIndex(item => item.id === updatedTransaction.id);
      state.expensesTransactions[transactionIndex] = updatedTransaction;
    },
    setCategoryFailed() { }
  }
});

export default expensesSlice.reducer;

export const getExpensesData = () => {
  const PATH = `${Endpoint.EXPENSES}`;

  const TYPES = [
    expensesSlice.actions.getExpensesDataRequest.type,
    expensesSlice.actions.getExpensesDataSuccess.type,
    expensesSlice.actions.getExpensesDataFailed.type,
  ];

  return axiosGet(PATH, TYPES);
};

export const setCategory = (transactionId: number, category: CategoyEnum) => {
  const PATH = `${Endpoint.EXPENSES_CATEGORY}`;

  const TYPES = [
    expensesSlice.actions.setCategoryRequest.type,
    expensesSlice.actions.setCategorySuccess.type,
    expensesSlice.actions.setCategoryFailed.type,
  ];

  const requestParams = {
    transactionId,
    category,
  };

  return axiosPost(PATH, TYPES, requestParams, {});
};
