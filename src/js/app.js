import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, hashHistory } from 'react-router';
import Geolocation from './components/Geolocation';
import MapView from './components/MapView';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/Geolocation" component={Geolocation} />
    <Route path="/MapView" component={MapView} />
  </Router>
), document.getElementById('main')
);

