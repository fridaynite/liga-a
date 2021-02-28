import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'

import { reducer as post } from '../components/post/reducer'
import { reducer as user } from '../components/user/reducer'
import { reducer as search } from '../components/search/reducer'

const combinedReducer = combineReducers({ post, user, search })

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const wrapper = createWrapper(initStore)
