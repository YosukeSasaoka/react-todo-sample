import { RECIEVE_UUID } from '../constants/ActionTypes'

export default function uuid(state='', action) {
  switch(action.type){
    case RECIEVE_UUID:
     return action.uuid;
    default:
      return state;
  }
}