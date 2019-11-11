import { createSlice } from 'redux-starter-kit';

import * as Endpoint from '../../middleware/api/EndpointConstants';
import { axiosPostFormData } from '../../middleware/api';
import { extractActionTypes } from '../FeatureUtil';

type UploadState = {
  isLoading: boolean;
  isUploaded: boolean;
};

const initialState: UploadState = {
  isLoading: false,
  isUploaded: false,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    uploadFileRequest(state) {
      state.isLoading = true;
    },
    uploadFileSuccess(state: UploadState) {
      state.isUploaded = true;
      state.isLoading = false;
    },
    uploadFileFailed(state) {
      state.isLoading = false;
    },
    clearUpdate(state) {
      state.isLoading = false;
      state.isUploaded = false;
    }
  }
});

export const {
  uploadFileRequest,
  uploadFileSuccess,
  uploadFileFailed,
  clearUpdate,
} = uploadSlice.actions;

export default uploadSlice.reducer;

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const PATH = `${Endpoint.UPLOAD}`;
  const TYPES = extractActionTypes([
    uploadFileRequest,
    uploadFileSuccess,
    uploadFileFailed,
  ]);

  return axiosPostFormData(PATH, TYPES, formData);
};
