import { FETCH_CURRENT_USER } from '../actions/actionTypes'

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload ? action.payload : null

        default:
            return state
    }
}
