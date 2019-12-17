import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';
import TransactionType from '../../../../type/TransactionType';

type BillsState = {
  billsTransactions: TransactionType[];
  isLoading: boolean;
};

const initialState: BillsState = {
  billsTransactions: [],
  isLoading: false,
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    getBillsDataRequest(state) {
      state.isLoading = true;
    },
    geBillsDataSuccess(state, action) {
      state.billsTransactions = action.payload.data;
      state.isLoading = false;
    },
    getBillsDataFailed(state) {
      state.isLoading = false;
    }
  }
});

export default billsSlice.reducer;

export const getBillsData = () => {
  const PATH = `${Endpoint.BILLS}`;

  const TYPES = extractActionTypes(billsSlice.actions);

  return axiosGet(PATH, TYPES);
};
