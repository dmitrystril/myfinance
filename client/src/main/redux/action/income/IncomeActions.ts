import { axiosGet } from '../../middleware';

import * as Endpoint from '../../../EndpointConstants';
import { GET_INCOME_DATA_TYPES } from './ApiActionConstants';

export function getIncomeData() {
  const PATH = `${Endpoint.INCOME}`;

  return axiosGet(PATH, Object.values(GET_INCOME_DATA_TYPES));
};
