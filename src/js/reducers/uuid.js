import * as uuidActions from '../actions/uuid';

export default function uuid(state={uuid : ''}, action) {
  switch(action.type){
    case uuidActions.RECIEVE_UUID:
     return {uuid : action.uuid};
    default:
      return state;
  }
}