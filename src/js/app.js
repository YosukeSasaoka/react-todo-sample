import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import Todo from './components/Todo'
import User from './components/User'

import configureStore, { DevTools } from './store/configureStore'
const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={User}/>
        <Route path="User" component={User}/>
        <Route path="Todo" component={Todo}/>
      </Router>
      <DevTools />
    </div>
  </Provider>, 
  document.getElementById('main')
);

