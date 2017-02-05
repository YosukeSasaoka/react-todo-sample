import { combineReducers } from 'redux'
import todos from './todos'
import uuid from './uuid'
import name from './name'
import { routerReducer } from 'react-router-redux'
 
export default combineReducers({ uuid, name, todos, routing: routerReducer })