import { SET_SEARCH_VALUE } from './actions'

const initialState = {
  value: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { value: action.payload }

    default:
      return state
  }
}
