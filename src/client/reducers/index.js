import { combineReducers } from 'redux'
// reducers
import user from './user'
import users from './users'

const reducers = combineReducers({ user, users })

export default reducers
