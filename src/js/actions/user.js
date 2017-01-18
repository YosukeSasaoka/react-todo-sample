import * as types from '../constants/ActionTypes'
import axios from 'axios'

export function submitName(name) {
  return {
    type: types.SUBMIT_NAME,
    name
  }
}

export function saveName(name) {
  return dispatch => {
    dispatch(submitName(name))
    axios.put("http://192.168.33.10:3002/api/v1/users/me/name/", {
        token: 'test_token',
        name: name
      })
      .then((response) => {
        console.log("save name")
      }).catch((error) => {
        console.error(error)
      })
  }
}

export function recieveUuid(uuid) {
  return {
    type: types.RECIEVE_UUID,
    uuid
  }
}

export function fetchUuid() {
  return dispatch => {
    axios.get("http://192.168.33.10:3002/api/v1/users/me/", {
        params: {
          token: 'test_token'
        }
      })
      .then((response) => {
        dispatch(recieveUuid(response.data.uuid))
      }).catch((error) => {
        console.error(error)
      })
  }
}