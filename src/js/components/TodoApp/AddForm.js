import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './AddForm.less';
import { FormControl } from 'react-bootstrap';

@CSSModules( style )
export default class AddForm extends React.Component {
  state = {
    text: this.props.text || ''
  }

  changeText( e ) {
    this.setState({ text: e.target.value })
  }

  addTodo( e ) {
    if ( e.keyCode !== 13/* enter key */ ) { return; }
    e.preventDefault();
    const text = this.state.text.trim();
    if ( text ) {
      this.props.addTodo( text );
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div styleName="form">
        <label styleName="title">Todo:</label>
        <FormControl
          type="text"
          styleName="text"
          placeholder="Enter text..."
          onChange={ ::this.changeText }
          onKeyDown={ ::this.addTodo }
          value={ this.state.text }
        />
      </div>
    );
  }
}

AddForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    text: PropTypes.string
}

