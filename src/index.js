import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";
import "./index.css";

const store = createStore(
  reducers,
  {
    auth: {
      token: localStorage.getItem("token"),
    },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
