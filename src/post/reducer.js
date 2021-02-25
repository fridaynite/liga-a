import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from './actions'

const initialState = {
  loading: false,
  loaded: false,
  posts: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, loading: true, loaded: false }

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.payload,
      }

    case GET_POSTS_ERROR:
      return { ...state, loading: false, loaded: false, error: action.payload }

    default:
      return state
  }
}
