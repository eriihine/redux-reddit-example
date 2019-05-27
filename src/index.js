import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

import Main from "./components/main.container";
import CommentsContainer from "./components/comments.container";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: #dae0e6;
    font-size: 16px
  }`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Main} />
        <Route path="/comments/" component={CommentsContainer} />
      </React.Fragment>
    );
  }
}

render(
  <React.Fragment>
    <GlobalStyle />
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.Fragment>,
  document.getElementById("root"),
);
