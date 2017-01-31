import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './Contents.less';
import AddForm from './AddForm';
import TodoList from './TodoList';

@CSSModules( style )
export default class Contents extends React.Component {
  addTodo( text ) {
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        { text, completed: false, id: new Date().getTime() }
      ]
    });
  }

  toggle( id ) {
    const todos = this.state.todos.map( todo => {
      return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({ ...this.state, todos });
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div styleName="contents">
        <AddForm
          addTodo={ actions.addTodo }
        />
        <TodoList
          todos={ todos }
          toggle={ actions.completeTodo }
        />
      </div>
    );
  }
}

Contents.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

