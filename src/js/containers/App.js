import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Uuid from '../components/Uuid'
import UserNameForm from '../components/UserNameForm'
import * as UserActions from '../actions/user'

const App = ({uuid, actions}) => (
  <div>
    <Uuid uuid={uuid} fetchUuid={actions.fetchUuid} />
    <UserNameForm onNameSubmit={actions.saveName} />
  </div>
)

App.propTypes = {
  uuid: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  uuid: state.uuid
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)