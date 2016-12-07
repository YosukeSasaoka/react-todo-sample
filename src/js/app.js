import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, hashHistory } from 'react-router';
import User from './components/User';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/User" component={User} />
  </Router>
), document.getElementById('main')
);

