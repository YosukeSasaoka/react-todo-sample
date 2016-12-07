import React from 'react';
import CSSModules from 'react-css-modules';
import style from './User.less';

@CSSModules( style )
export default class User extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="user">
        <p>React User</p>
      </div>
    );
  }
}

