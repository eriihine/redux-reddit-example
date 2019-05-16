import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createGlobalStyle} from 'styled-components';

import Main from './components/main.container';
import store from './store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: #dae0e6;
    font-size: 16px
  }`;

class App extends React.Component {
  render() {
    return <Main />;
  }
}

render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
);
