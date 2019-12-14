import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import moment from 'moment';

const { RangePicker } = DatePicker;

const CustomRangePicker = styled(RangePicker)`
  margin-block-end: 20px !important;
`;

interface DateSelectProps {
  onChange: Function;
};

const DateSelect: React.FC<DateSelectProps> = (props: DateSelectProps) => {
  const {
    onChange,
  } = props;

  const yearStart = moment().startOf('year');
  const yearEnd = moment().endOf('year');
  const monthStart = moment().startOf('month');
  const monthEnd = moment().endOf('month');
  const today = moment();

  return (
    <CustomRangePicker
        ranges={{
          'This Year': [yearStart, yearEnd],
          'This Month': [monthStart, monthEnd],
          Today: [today, today],
        }}
        defaultValue={[yearStart, yearEnd]}
        onChange={(dates: RangePickerValue, dateStrings: [string, string]) => onChange(dates, dateStrings)}
    />
  );
}

export default DateSelect;
