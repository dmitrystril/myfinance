import { axiosGet } from '../../middleware';

import * as Endpoint from '../../../EndpointConstants';
import { GET_EXPENSES_DATA_TYPES } from './ApiActionConstants';

export function getExpensesData() {
  const PATH = `${Endpoint.EXPENSES}`;

  return axiosGet(PATH, Object.values(GET_EXPENSES_DATA_TYPES));
};
