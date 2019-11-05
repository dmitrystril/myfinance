import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';

type ExpensesState = {
  testData: string | null;
};

const initialState: ExpensesState = {
  testData: null,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    getExpensesDataRequest() {},
    getExpensesDataSuccess(state, action) {
      state.testData = action.payload.data;
    },
    getExpensesDataFailed() {},
  }
});

export default expensesSlice.reducer;

export const getExpensesData = () => {
  const PATH = `${Endpoint.EXPENSES}`;
  const TYPES = extractActionTypes(expensesSlice.actions);

  return axiosGet(PATH, TYPES);
};
