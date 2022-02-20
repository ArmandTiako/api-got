import { createStore } from "redux";
import { BookReducer } from "./reducers/bookReducer";

const store = createStore(BookReducer);
export default store;
