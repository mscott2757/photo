import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import photoApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(
  photoApp,
  applyMiddleware(thunkMiddleware)
);

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
