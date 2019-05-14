import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Main from './components/main';
import store from './store';
import './styles.css';

class App extends React.Component {
  render() {
    return <Main />;
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
