import { UPDATE_SUCCESS, UPDATE_FAILED } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };

    default:
      return state;
  }
}

export default userReducer;
