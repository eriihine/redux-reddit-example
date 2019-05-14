import {combineReducers} from 'redux';
import redditReducer from './reddit.reducer';

const rootReducer = combineReducers({
  reddits: redditReducer,
});

export default rootReducer;
