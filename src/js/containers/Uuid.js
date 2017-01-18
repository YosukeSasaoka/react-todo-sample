import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Uuid from '../components/Uuid'
import * as uuidActions from '../actions/uuid'

function mapStateToProps(state)  {
  return {
    uuid : state.uuid
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(uuidActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Uuid)

