import { combineReducers } from "redux";
import RgbDisplayReducer from "../components/RgbDisplay/RgbDisplayReducer";
// Combine all reducers.

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.

  if (action.type === "Logout") state = undefined;

  return appReducer(state, action);
};

const appReducer = combineReducers({
  RgbDisplayReducer
});

export default rootReducer;
