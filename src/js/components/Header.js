import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Header.less';
import { Link } from 'react-router';

@CSSModules( style )
export default class Header extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="header">
        <p>React Todo Sample</p>
        <dl>
         <dd><Link to="/Geolocation">Geolocation Test</Link></dd>
         <dd><Link to="/MapView">Map Test</Link></dd>
        </dl>
      </div>
    );
  }
}

