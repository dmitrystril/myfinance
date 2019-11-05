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
      const payload = {
        data: response.data,
      };

      next({
        payload,
        headers: response.headers,
        config,
        type: successType,
        ...params,
      });
      return payload;
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
