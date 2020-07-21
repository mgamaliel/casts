import { FETCH_ADMINS } from '../actions/actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload

        default:
            return state
    }
}