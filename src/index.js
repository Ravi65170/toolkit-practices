import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import App from "./App";
import { store } from "./store/main";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
