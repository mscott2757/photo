import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GAListener from './GAListener';

ReactDOM.render((
  <BrowserRouter>
    <GAListener>
      <App />
    </GAListener>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
