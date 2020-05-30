import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// Redux Dependencies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState } from './sessionStorage';
import thunk from 'redux-thunk';
import reducer from './reducers';

// React MDL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// Redux Store
const persistedState = loadState();
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
