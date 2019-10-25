import { axiosGet } from '../middleware';

import * as Endpoint from '../../EndpointConstants';
import { GET_TEST_API_DATA_TYPES } from './constant/ApiActionConstants';

export function getTestApiData() {
  const PATH = `${Endpoint.TEST_API}`;

  return axiosGet(PATH, Object.values(GET_TEST_API_DATA_TYPES));
};
