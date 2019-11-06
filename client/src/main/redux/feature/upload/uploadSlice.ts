import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosPostFormData } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';

type UploadState = {

};

const initialState: UploadState = {

};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    uploadFileRequest() {},
    uploadFileSuccess() {},
    uploadFileFailed() {},
  }
});

export default uploadSlice.reducer;

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const PATH = `${Endpoint.UPLOAD}`;
  const TYPES = extractActionTypes(uploadSlice.actions);

  return axiosPostFormData(PATH, TYPES, formData);
};
