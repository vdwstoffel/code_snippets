import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counterSlice", // identifying alias
  initialState: initialState,
  // Set reducer actions
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state, action) {
      // passing a payload. will be dispatched as .func({amount: 2})
      state.counter = state.counter - action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions; // export to component
export default counterSlice; // export to store
