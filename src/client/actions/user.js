import { FETCH_CURRENT_USER } from './actionTypes'

const fetchCurrentUser = (user) => ({
    type: FETCH_CURRENT_USER,

    payload: user,
})

export const fetchCurrentUserAsync = () => {
    return async (dispatch, _, api) => {
        const response = await api('/current_user')

        return dispatch(fetchCurrentUser(response.data))
    }
}
