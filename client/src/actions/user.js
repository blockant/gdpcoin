import axios from "axios";
import api from "../utils/api";
import setAuthToken from "../utils/setAuthToken";

import { setAlert } from "./alert";
import { UPDATE_SUCCESS, UPDATE_FAILED } from "./types";
import { async } from "q";

// Login User
export const updateProfile = (formData, userId) => async (dispatch) => {
  try {
    console.log(userId);
    const res = await api.put(`/users/${userId}`, formData);

    console.log(res.data.user);
    if (res.data) {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: {
          user: res.data.user,
        },
      });
      dispatch(setAlert("Updated Successfully.", "success"));
    }
    // dispatch(loadUser());
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: UPDATE_FAILED,
      });
    } else dispatch(setAlert("Something went wrong.", "danger"));
  }
};

export const updatePassword =
  (oldPassword, newPassword, userId) => async (dispatch) => {
    try {
      console.log(userId);
      const res = await api.put(`/users/${userId}/password`, {
        oldPassword,
        newPassword,
      });
      console.log(res.data);
      if (res.data) {
        dispatch(setAlert(res.data.msg, "success"));
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
          type: UPDATE_FAILED,
        });
      } else dispatch(setAlert("Something went wrong.", "danger"));
    }
  };
