import { createSlice } from "@reduxjs/toolkit";

const initialArrayState = { array: [], arraySize: 50, sortingSpeed: 0 };

const arraySlice = createSlice({
  name: "array",
  initialState: initialArrayState,
  reducers: {
    generateArray(state, actions) {
      state.array = [];
      for (let i = 0; i < actions.payload; i++) {
        state.array.push(getRandomIntInclusive(5, 210));
      }
      state.sortingSpeed =
        600 - Math.pow(state.array.length, 2) > 0
          ? 600 - Math.pow(state.array.length, 2)
          : 0;
    },
    setArray(state, actions) {
      state.array = [];
      state.array = [...actions.payload];
    },
  },
});

export const arrayActions = arraySlice.actions;
export default arraySlice;

//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
