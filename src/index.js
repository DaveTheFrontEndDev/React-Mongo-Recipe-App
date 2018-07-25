import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

import Root from './pages/root';
import './sass/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={'/recipes'}>
      <Route path="/" component={Root}/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
