import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Main.less';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Contents from './Contents/Contents';
import Geolocation from './Geolocation';

export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <Geolocation />
    );
  }
}

