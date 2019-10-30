import { GET_TEST_API_DATA_TYPES } from '../action/constant/ApiActionConstants';

export interface RootState {
  testData: string | null;
};

const initialState: RootState = {
  testData: null,
};

const rootReducer = (state = initialState, action: any): RootState => {
  switch (action.type) {
    case GET_TEST_API_DATA_TYPES.GET_TEST_API_DATA_SUCCESS:
      return {
        ...state,
        testData: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
