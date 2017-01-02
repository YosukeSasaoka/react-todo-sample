import axios from 'axios'

export const RECIEVE_UUID = 'RECIEVE_UUID'

export function recieveUuid(uuid) {
  return {
    type: RECIEVE_UUID,
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