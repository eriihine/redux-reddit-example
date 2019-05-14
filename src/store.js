import {
    createStore,
    applyMiddleware
} from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import "./styles.css";

export default createStore(
    reducers,
    undefined, // no-preloaded-state
    applyMiddleware(reduxThunk),
);