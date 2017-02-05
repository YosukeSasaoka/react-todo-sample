import React from 'react';
import CSSModules from 'react-css-modules';
import style from './User.less';
import Header from './Header';
import UserApp from '../containers/UserApp'

@CSSModules( style )
export default class User extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <Header />
        <div styleName="user">
          <div styleName="wrapper">
            <UserApp />
          </div>
        </div>
      </div>
    );
  }
}

