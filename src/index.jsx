import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App"
import { store } from "./redux/redux.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <App></App>
  </Provider>,
  document.getElementById("root")
);
