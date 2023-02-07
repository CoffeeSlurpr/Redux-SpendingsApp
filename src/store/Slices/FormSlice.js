import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./ListSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName: (state, action) => {
      console.log(action);
      state.name = action.payload;
    },

    changeCost: (state, action) => {
      state.cost = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addItem, () => {
      return { name: "", cost: 0 };
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice.reducer;
