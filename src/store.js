import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = composeWithDevTools({name: 'redux.demo'});

export default createStore(
  reducers,
  undefined, // no-preloaded-state
  composeEnhancers(applyMiddleware(reduxThunk)),
);
