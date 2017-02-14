import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Hoge.less';

@CSSModules( style )
export default class Hoge extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="hoge">
        <p>aaaa</p>
      </div>
		);
  }
}
