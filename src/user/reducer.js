import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './actions'

const initialState = {
  loading: false,
  loaded: false,
  users: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true, loaded: false }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload,
      }

    case GET_USERS_ERROR:
      return { ...state, loading: false, loaded: false, error: action.payload }

    default:
      return state
  }
}
