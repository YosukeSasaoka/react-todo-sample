import * as uuidActions from '../actions/uuid';

export default function uuid(state='', action) {
  switch(action.type){
    case uuidActions.RECIEVE_UUID:
     return action.uuid;
    default:
      return state;
  }
}