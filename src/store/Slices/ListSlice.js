import { createSlice, nanoid } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    searchTerm: "",
    items: [],
  },
  reducers: {
    changeTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    addItem: (state, action) => {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { changeTerm, addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
