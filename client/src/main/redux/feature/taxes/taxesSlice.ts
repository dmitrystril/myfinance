import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';
import TransactionType from '../../../../type/TransactionType';

type TaxesState = {
  taxesTransactions: TransactionType[];
  isLoading: boolean;
};

const initialState: TaxesState = {
  taxesTransactions: [],
  isLoading: false,
};

const taxesSlice = createSlice({
  name: 'taxes',
  initialState,
  reducers: {
    getTaxesDataRequest(state) {
      state.isLoading = true;
    },
    geTaxesDataSuccess(state, action) {
      state.taxesTransactions = action.payload.data;
      state.isLoading = false;
    },
    getTaxessDataFailed(state) {
      state.isLoading = false;
    }
  }
});

export default taxesSlice.reducer;

export const getTaxesData = () => {
  const PATH = `${Endpoint.TAXES}`;

  const TYPES = extractActionTypes(taxesSlice.actions);

  return axiosGet(PATH, TYPES);
};
