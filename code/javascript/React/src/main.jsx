import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/auth-context";
import { Provider } from "react-redux";

import "../src/styles/main.css";

import App from "./App.jsx";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
