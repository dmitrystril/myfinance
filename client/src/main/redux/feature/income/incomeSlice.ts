import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';

type IncomeState = {
  testData: string | null;
};

const initialState: IncomeState = {
  testData: null,
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    getIncomeDataRequest() {},
    getIncomeDataSuccess(state, action) {
      state.testData = action.payload.data;
    },
    getIncomeDataFailed() {},
  }
});

export default incomeSlice.reducer;

export const getIncomeData = () => {
  const PATH = `${Endpoint.INCOME}`;
  const TYPES = extractActionTypes(incomeSlice.actions);

  return axiosGet(PATH, TYPES);
};
