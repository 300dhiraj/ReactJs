import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const reducerName = (state = 0, action) => {
  switch (action.type) {
    case "FETCH":
      return { records: action.payload };
    case "DELETE":
      return { records: action.payload };
    default:
      return state;
  }
};

let store = createStore(reducerName);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
