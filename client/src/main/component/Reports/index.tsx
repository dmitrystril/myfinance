import React from 'react';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { useDispatch } from 'react-redux';

import PageContainer from '../common/PageContainer';
import DateSelect from '../common/DateRangeSelect';
import { getReportData } from '../../redux/feature/reports/reportsSlice';

const Reports: React.FC = () => {
  const dispatch = useDispatch();

  const handleDateChange = (dates: RangePickerValue, dateStrings: [string, string]) => {
    if (dates[0] && dates[1]) {
      dispatch(getReportData(dates[0].toDate(), dates[1].toDate()));
    }
  }

  return (
    <PageContainer header="Reports">
      <DateSelect onChange={handleDateChange} />
    </PageContainer>
  );
};

export default Reports;
