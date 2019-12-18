import React from 'react';
import styled from 'styled-components';

import './column.css';

const AmountColumn = styled.div`
  color: #85bb65;
`;

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 200,
  },
  {
    title: 'Merchant category',
    dataIndex: 'merchantCategory',
    key: 'merchantCategory',
    ellipsis: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    width: 100,
    className: 'default-column',
    render: (text: string) => <AmountColumn>{text}</AmountColumn>,
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    width: 100,
    className: 'default-column',
  },
];

export default columns;
