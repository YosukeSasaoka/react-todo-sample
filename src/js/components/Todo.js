import React from 'react';
import CSSModules from 'react-css-modules'
import style from './Todo.less'
import Header from './Header'
import TodoApp from '../containers/TodoApp'

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
            <TodoApp />
          </div>
        </div>
      </div>
    );
  }
}

