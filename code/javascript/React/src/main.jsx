import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/auth-context";

import "../src/styles/main.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
