import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // npm i react-redux

import App from "./App";
import store from "./store/store"; // import the redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // assign the store value
  <Provider store={store}>
    <App />
  </Provider>
);
