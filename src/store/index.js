import { configureStore } from "@reduxjs/toolkit";
import formReducer, { changeName, changeCost } from "./Slices/FormSlice";
import listReducer, { changeTerm, addItem, removeItem } from "./Slices/ListSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    list: listReducer,
  },
});

export { changeTerm, addItem, removeItem, changeName, changeCost };
export default store;
