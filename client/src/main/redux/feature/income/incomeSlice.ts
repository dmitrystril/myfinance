import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';
import TransactionType from '../../../../type/TransactionType';

type IncomeState = {
  incomeTransactions: TransactionType[];
  isLoading: boolean;
};

const initialState: IncomeState = {
  incomeTransactions: [],
  isLoading: false,
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    getIncomeDataRequest(state) {
      state.isLoading = true;
    },
    getIncomeDataSuccess(state, action) {
      state.incomeTransactions = action.payload.data;
      state.isLoading = false;
    },
    getIncomesDataFailed(state) {
      state.isLoading = false;
    },
  }
});

export default incomeSlice.reducer;

export const getIncomeData = () => {
  const PATH = `${Endpoint.INCOME}`;
  const TYPES = extractActionTypes(incomeSlice.actions);

  return axiosGet(PATH, TYPES);
};
