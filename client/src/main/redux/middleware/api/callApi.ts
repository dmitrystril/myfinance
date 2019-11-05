import axios, { AxiosRequestConfig } from 'axios';

export const CALL_API = 'Call_API';

export default async (endpoint: string, config: AxiosRequestConfig) => {
  const axiosConfig = {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...config.headers,
    },
  };

  return axios(endpoint, axiosConfig);
};
