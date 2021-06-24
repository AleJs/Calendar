import { combineReducers } from "redux";
import { uiReducers } from "./uiReducers";

export const rootReducer = combineReducers({
  ui: uiReducers,
});
