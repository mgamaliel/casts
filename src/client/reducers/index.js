import { combineReducers } from 'redux'
// reducers
import user from './user'
import users from './users'
import admins from './admins'

const reducers = combineReducers({ user, users, admins })

export default reducers
