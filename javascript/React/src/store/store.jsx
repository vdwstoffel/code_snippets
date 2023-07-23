import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: { counterSlicer: counterSlice.reducer },
});

export default store; // will be imported in main as a Wrapper for the app

/*
 * When you have multiple stores add it to the configure store's reducer in key/value pairs ex.
 *   const store = configureStore({
 *       reducer: { counterSlicer: counterSlice.reducer, auth: authSlice.reducer },
 *   });
 */
