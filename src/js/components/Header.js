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
        <ul>
				  <li><Link to="/Todo">React Todo App</Link></li>
				  <li><Link to="/User">User test</Link></li>
        </ul>
      </div>
    );
  }
}

