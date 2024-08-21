import './tailwind.css';
import React, { useEffect } from "react";
import Cookies from "js-cookie";

import Router from "./routes/router";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import { LOGOUT } from "./actions/types";
//component
import Alert from "./layouts/Alert";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  if (token) {
    setAuthToken(token); // Token will be accessible now. You can process it as per application needs.
  }

  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Alert />
      <Router />
    </Provider>
  );
}

export default App;
