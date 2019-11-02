import { GET_EXPENSES_DATA_TYPES } from '../../action/expenses/ApiActionConstants';

export interface ExpensesState {
  testData: string | null;
};

const initialState: ExpensesState = {
  testData: null,
};

const expenses = (state = initialState, action: any): ExpensesState => {
  switch (action.type) {
    case GET_EXPENSES_DATA_TYPES.GET_EXPENSES_DATA_SUCCESS:
      return {
        ...state,
        testData: action.data,
      };
    default:
      return state;
  }
};

export default expenses;
