import {
  GET_TRANSACTIONS,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILED,
  CLEAR_TRANSACTION_FLAG_STATUS,
} from "../actions/types";

const initialState = [];

function transactionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: payload.transactions,
        totalAmount: payload.totalAmount,
        avaxTotalAmount: payload.avaxTotalAmount,
        usdtTotalAmount: payload.usdtTotalAmount,
        amount: payload.amount,
        loading: false,
      };
    case CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        createSuccess: 1,
      };
    case CREATE_TRANSACTION_FAILED:
    case CLEAR_TRANSACTION_FLAG_STATUS:
      return {
        ...state,
        createSuccess: null,
      };
    default:
      return state;
  }
}

export default transactionReducer;
