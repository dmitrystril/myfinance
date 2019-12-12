import './column.css';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 200,
  },
  {
    title: 'Merchant category ',
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
    className: 'column-amount',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    width: 100,
    className: 'column-currency',
  },
  {
    title: 'Cashback',
    dataIndex: 'cashback',
    key: 'cashback',
    width: 100,
    className: 'column-cashback',
  },
];

export default columns;
