import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import choreListApp from './reducers';
import App from './components/App';

const loggerMiddleware = createLogger();

const store = createStore(
  choreListApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// TODO: move to component lifecycle method
import { fetchChores } from './actions';
store.dispatch(fetchChores());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
