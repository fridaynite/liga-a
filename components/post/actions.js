import axios from 'axios'

import { apiRoot } from '../../config/'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST,
  }
}

const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data,
  }
}

const getPostsError = (err) => {
  return {
    type: GET_POSTS_ERROR,
    payload: err,
  }
}

export const getPosts = () => async (dispatch) => {
  const req = getPostsRequest()
  dispatch(req)

  const url = `${apiRoot}/posts`

  try {
    const response = await axios.get(url)

    const succ = getPostsSuccess(response.data)
    dispatch(succ)
  } catch (error) {
    const err = getPostsError(error)

    dispatch(err)
  }
}
