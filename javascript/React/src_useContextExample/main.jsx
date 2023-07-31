import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/auth-context.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap app in the context provider */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
