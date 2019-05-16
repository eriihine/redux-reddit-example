import {combineReducers} from 'redux';
import redditReducer from './reddit.reducer';
import appReducer from './app.reducer';

const rootReducer = combineReducers({
  reddits: redditReducer,
  app: appReducer,
});

export default rootReducer;
