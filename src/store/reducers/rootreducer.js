import ipreducer from "./ipreducer";
import reducer1 from "./reducer1";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  ip: ipreducer,
  red1: reducer1
});

export default rootReducer;
