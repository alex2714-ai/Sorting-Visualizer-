import { createSlice } from "@reduxjs/toolkit";

const initialAlghState = { currentAlgh: null, isRunning: false };

const alghSlice = createSlice({
  name: "algh",
  initialState: initialAlghState,
  reducers: {
    updateAlgh(state, actions) {
      state.currentAlgh = actions.payload;
    },
    setIsRunning(state, actions) {
      state.isRunning = actions.payload;
    },
  },
});

export const alghActions = alghSlice.actions;
export default alghSlice;
