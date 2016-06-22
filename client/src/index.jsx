import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import choreListApp from './reducers';
import ChoreList from './containers/ChoreList';

const store = createStore(choreListApp);

ReactDOM.render(
  <Provider store={store}>
    <ChoreList />
  </Provider>,
  document.querySelector('#root')
);
