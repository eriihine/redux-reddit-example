import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reddits: (state = [], action) => action.payload || state
});

export default rootReducer;
