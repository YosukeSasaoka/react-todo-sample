import React, { Component, PropTypes } from 'react'

export default class Uuid extends Component {
  componentDidMount() {
    this.props.fetchUuid()
  }  
  
  render() {
    const {uuid} = this.props;
    return (
      <h2>UUID: {uuid}</h2>
    )
  }
}

Uuid.propTypes = {
  uuid : PropTypes.string.isRequired,
  fetchUuid: PropTypes.func.isRequired
}