import { createStore } from "redux";
import counterReducer from "./CounterReducer.js";
const store = createStore(counterReducer);
export default store;