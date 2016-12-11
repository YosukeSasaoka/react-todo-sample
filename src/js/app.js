import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, hashHistory } from 'react-router';
import Geolocation from './components/Geolocation';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/Geolocation" component={Geolocation} />
  </Router>
), document.getElementById('main')
);

