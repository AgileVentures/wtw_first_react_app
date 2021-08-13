import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ClassicApp from "./ClassicApp";
import ConnectedComponent from "./ConnectedComponent";
import HookedComponent from "./HookedComponent";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedComponent />
    <HookedComponent />
  </Provider>,
  document.getElementById("root")
);
