import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Dropdown, Menu, Icon } from 'antd';

import DATE_FORMAT from '../../../constant/DateFormat';
import CategoryEnum from '../common/CategoryEnum';
import './column.css';

const AmountColumn = styled.div`
  color: #C21807;
`;

const CashbackColumn = styled.div`
  color: #85bb65;
`;

const DropdownLabel = styled.div`
  color: #40a9ff;
  cursor: pointer;
`;

const getColumns = (handleMarkAs: Function) => {
  return [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: Date) => <span>{moment(date).format(DATE_FORMAT.YYYY_MM_DD)}</span>
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
      className: 'default-column',
      render: (text: string) => <AmountColumn>{text}</AmountColumn>,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      className: 'default-column',
    },
    {
      title: 'Cashback',
      dataIndex: 'cashback',
      key: 'cashback',
      className: 'default-column',
      render: (text: string) => <CashbackColumn>{text}</CashbackColumn>,
    },
    {
      title: 'Category',
      key: 'category',
      width: 120,
      className: 'default-column',
      render: (text: any, record: any) => (
        record.category != null ? CategoryEnum.getTitle(record.category) : (
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item
                  key="1"
                  onClick={() => handleMarkAs(record.key, CategoryEnum.TAXES)}>Taxes
              </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => handleMarkAs(record.key, CategoryEnum.BILLS)}>Bills
              </Menu.Item>
              </Menu>
            }
          >
            <DropdownLabel>
              Mark as <Icon type="down" />
            </DropdownLabel>
          </Dropdown>
        )
      ),
    },
  ]
};

export { getColumns };
