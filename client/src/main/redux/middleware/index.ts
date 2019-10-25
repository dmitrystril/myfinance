import { CALL_API } from './callApi';

export function axiosGet(
  path: string,
  types: Array<string>,
) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: { method: 'GET' },
      types,
    },
  };
}

export function axiosOptions(
  path: string,
  types: Array<string>,
) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: { method: 'OPTIONS' },
      types,
    },
  };
}

export function axiosPost(
  path: string,
  types: Array<string>,
  requestParams: Object,
  { ...restParams }
) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: {
        data: requestParams,
        method: 'POST',
      },
      types,
      ...restParams,
    },
  };
}

export function axiosPut(
  path: string,
  types: Array<string>,
  requestParams: Object,
{ ...restParams }) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: {
        data: requestParams,
        method: 'PUT',
      },
      types,
      ...restParams,
    },
  };
}

export function axiosPatch(
  path: string,
  types: Array<string>,
  requestParams: Object,
  { ...restParams }
) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: {
        data: requestParams,
        method: 'PATCH',
      },
      types,
      ...restParams,
    },
  };
}

export function axiosDelete(
  path: string,
  types: Array<string>,
  params: Object,
) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: {
        method: 'DELETE',
      },
      types,
      ...params,
    },
  };
}

export function axiosPostFormData(
  path: string,
  types: Array<string>,
  formData: FormData,
) {
  return {
    [CALL_API]: {
      endpoint: path,
      config: {
        data: formData,
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
      },
      types,
    },
  };
}
