import { SUBMIT_NAME } from '../constants/ActionTypes'

export default function name(state='', action) {
  switch(action.type){
    case SUBMIT_NAME:
     return action.name;
    default:
      return state;
  }
}