import React from 'react';
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

