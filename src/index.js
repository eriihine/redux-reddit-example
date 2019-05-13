import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import Main from "./components/main";
import reducers from "./reducers/reducers";
import "./styles.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const redditStore = createStoreWithMiddleware(reducers);

class App extends React.Component {
  render() {
    return <Main />;
  }
}

render(
  <Provider store={redditStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
