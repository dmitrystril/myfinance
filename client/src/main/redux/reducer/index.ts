import { GET_TEST_API_DATA_TYPES } from '../action/constant/ApiActionConstants';

const initialState = {
  testData: null,
};

const rootReducer = (state = initialState, action: any) => {
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
