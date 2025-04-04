import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { Loaderon, loaderOff } from "./applicationComponent/Loader";
import ModalPopup from "./applicationComponent/ModalPopup";

import { store } from "./redux/configure-store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Loaderon />
    {/* <ModalPopup /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
