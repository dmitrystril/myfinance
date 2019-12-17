import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import DATE_FORMAT from '../../../../constant/DateFormat';

const Title = styled.span`
  font-weight: 500;
`;

const ExpandedRow = (props: any) => {
  return (
    <div>
      <p>
        <Title>Date: </Title>
        {moment(props.record.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS)}
      </p>
      <p>
        <Title>Merchant category: </Title>
        {props.record.merchantCategory}
      </p>
    </div>
  );
};

export default ExpandedRow;
