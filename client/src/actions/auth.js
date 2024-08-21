import axios from "axios";
import api from "../utils/api";
import setAuthToken from "../utils/setAuthToken";

import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    console.log("res.data", res.data);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/users", {
        name: name,
        email: email,
        password: password,
      });
      if (res.data) {
        const { token } = res.data;

        setAuthToken(token);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch(loadUser());
      } else {
        dispatch(setAlert("Something went wrong!", "danger"));
      }
    } catch (err) {
      if (err.response && err.response.data) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
          type: REGISTER_FAIL,
        });
      } else dispatch(setAlert("Something went wrong.", "danger"));
    }
  };

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/auth", body);
    const { token } = res.data;

    setAuthToken(token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    if (err.response && err.response.data) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    } else dispatch(setAlert("Something went wrong.", "danger"));
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  } catch (error) {}
};

//Google Login

export const googleLogin = () => async (dispatch) => {
  try {
    axios
      .get("http://localhost:5001/auth/google")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    // const { token } = res.data;

    // setAuthToken(token);
    // dispatch({
    //   type: LOGIN_SUCCESS,
    //   payload: res.data,
    // });

    dispatch(loadUser());
  } catch (err) {
    if (err.response && err.response.data) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    } else dispatch(setAlert("Something went wrong.", "danger"));
  }
};

export const verificationEmail = (emailToken, email) => async (dispatch) => {
  try {
    console.log("emailToken", emailToken);
    console.log("email", email);
    const res = await api.post("/verification", {
      emailToken: emailToken,
      email: email,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch(setAlert("Something went wrong.", "danger"));
  }
};
