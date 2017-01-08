import { combineReducers } from 'redux'
import uuid from './uuid'
import name from './name'

const app = combineReducers({ uuid, name })
export default app