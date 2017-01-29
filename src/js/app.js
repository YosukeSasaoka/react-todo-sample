import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import User from './components/User';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Todo} />
    <Route path="/Todo" component={Todo} />
    <Route path="/User" component={User} />
  </Router>
), document.getElementById('main')
);

