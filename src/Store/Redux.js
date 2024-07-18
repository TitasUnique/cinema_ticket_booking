import { createStore } from "redux";
const INITIAL_STATE = {
  storecity: "",
  storetheatre: "",
};
const createReducer = (store = INITIAL_STATE, action) => {
  if (action.type === "selectedCity") {
    return { ...store, storecity: action.payload };
  } 
  else if (action.type === "selectedTheatre") {
    return { ...store, storetheatre: action.payload };
  }
  else {
    return store;
  }
};
const store = createStore(createReducer);
export default store;
