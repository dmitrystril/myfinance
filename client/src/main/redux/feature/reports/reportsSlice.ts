import { createSlice } from 'redux-starter-kit';
import qs from 'qs';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosGet } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';

type ReportState = {
  isLoading: boolean,
};

const initialState: ReportState = {
  isLoading: false,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    getReportDataRequest(state) {
      state.isLoading = true;
    },
    getReportDataSuccess(state, action) {
      state.isLoading = false;
    },
    getReportsDataFailed(state) {
      state.isLoading = false;
    }
  }
});

export default reportSlice.reducer;

export const getReportData = (dateFrom: Date, dateTo: Date) => {
  const TYPES = extractActionTypes(reportSlice.actions);

  const queryParams = qs.stringify({
    dateFrom,
    dateTo,
  });

  return axiosGet(`${Endpoint.REPORT}?${queryParams}`, TYPES);
};
