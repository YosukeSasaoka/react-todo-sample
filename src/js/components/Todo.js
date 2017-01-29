import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Todo.less';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Contents from './TodoApp/Contents';

@CSSModules( style )
export default class Todo extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <Header />
        <div styleName="todo">
          <div styleName="wrapper">
            <Contents />
          </div>
        </div>
      </div>
    );
  }
}

