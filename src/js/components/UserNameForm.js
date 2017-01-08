import React, { Component, PropTypes } from 'react'

export default class UserNameForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value.trim();
    if (!name) {
      return;
    }
    this.props.onNameSubmit(name);
    this.refs.name.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        ユーザー名
        <input type="text" placeholder="Input new name" ref="name" />
        <input type="submit" value="更新" />
      </form>
    )
  }
}

UserNameForm.propTypes = {
  onNameSubmit: PropTypes.func.isRequired
};
