import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { reducer as post } from './post/reducer'
import { reducer as user } from './user/reducer'
import { reducer as search } from './search/reducer'

const reducer = combineReducers({ post, user, search })

export const store = createStore(reducer, applyMiddleware(thunk))
