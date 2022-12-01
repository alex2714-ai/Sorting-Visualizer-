import { configureStore } from "@reduxjs/toolkit";
import arraySlice from "./array-slice";
import alghSlice from "./updateAlgh";

const store = configureStore({
  reducer: {
    arr: arraySlice.reducer,
    algorithms: alghSlice.reducer,
  },
});

export default store;
