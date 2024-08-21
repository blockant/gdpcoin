import api from "../utils/api";
import { setAlert } from "./alert";
import {
  CREATE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS,
  CLEAR_TRANSACTION_FLAG_STATUS,
  CREATE_TRANSACTION_FAILED,
} from "./types";

// Login User
export const createTransaction = (data) => async (dispatch) => {
  try {
    console.log(data.wallet);
    if (!data.wallet) {
      dispatch(setAlert("You should have to connect your wallet", "danger"));
      return 0;
    }
    const res = await api.post("/transaction", data);

    if (res.data && res.data.success == 1) {
      dispatch({
        type: CREATE_TRANSACTION_SUCCESS,
      });
      dispatch(setAlert("Successfully created", "success"));
    } else {
      dispatch({
        type: CREATE_TRANSACTION_FAILED,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong.", "danger"));
  }
};

export const getTransactions = () => async (dispatch) => {
  try {
    const res = await api.get("/transaction");
    console.log("res.data.transactions", res.data.transactions);

    if (res.data.transactions) {
      let totalAmount = 0;
      let avaxTotalAmount = 0;
      let usdtTotalAmount = 0;
      let amount = res.data.amount;
      res.data.transactions.map((item) => {
        totalAmount += item.details.amount;
        if (item.payment.currency == 1) avaxTotalAmount += item.payment.amount;
        else usdtTotalAmount += item.payment.amount;
      });
      dispatch({
        type: GET_TRANSACTIONS,
        payload: {
          transactions: res.data.transactions,
          totalAmount: totalAmount,
          avaxTotalAmount: avaxTotalAmount,
          usdtTotalAmount: usdtTotalAmount,
          amount: amount,
        },
      });
    }
    console.log(res.data);
  } catch (error) {}
};

export const clearFlagStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_TRANSACTION_FLAG_STATUS,
  });
};
