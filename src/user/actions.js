import axios from 'axios'

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  }
}

const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  }
}

const getUsersError = (err) => {
  return {
    type: GET_USERS_ERROR,
    payload: err,
  }
}

export const getUsers = () => async (dispatch) => {
  const req = getUsersRequest()
  dispatch(req)

  const url = 'https://jsonplaceholder.typicode.com/users'

  try {
    const response = await axios.get(url)

    const succ = getUsersSuccess(response.data)
    dispatch(succ)
  } catch (error) {
    const err = getUsersError(error)

    dispatch(err)
  }
}
