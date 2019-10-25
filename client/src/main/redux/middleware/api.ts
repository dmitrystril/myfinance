import callApi, { CALL_API } from './callApi';

export default () => (next: any) => (action: any) => {
  if (!action[CALL_API]) {
    return next(action);
  }

  const {
    endpoint,
    types,
    config,
    ...params
  } = action[CALL_API];

  const [requestType, successType, errorType] = types;

  next({
    config,
    type: requestType,
    ...params,
  });

  return callApi(endpoint, config)
    .then((response) => {
      const data = response.data;
      next({
        data,
        headers: response.headers,
        config,
        type: successType,
        ...params,
      });
      return data;
    }).catch((error) => {
      next({
        type: errorType,
        config,
        ...params,
        error,
      });

      throw error;
    });
};
