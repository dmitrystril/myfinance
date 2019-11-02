import { GET_INCOME_DATA_TYPES } from '../../action/income/ApiActionConstants';

export interface IncomeState {
  testData: string | null;
};

const initialState: IncomeState = {
  testData: null,
};

const income = (state = initialState, action: any): IncomeState => {
  switch (action.type) {
    case GET_INCOME_DATA_TYPES.GET_INCOME_DATA_SUCCESS:
      return {
        ...state,
        testData: action.data,
      };
    default:
      return state;
  }
};

export default income;
