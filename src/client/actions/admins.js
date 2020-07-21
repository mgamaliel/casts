import { FETCH_ADMINS } from './actionTypes'

const fetchAdmins = (admins) => ({
    type: FETCH_ADMINS,

    payload: admins,
})

export const fetchAdminsAsync = () => {
    return async (dispatch, _, api) => {
        const response = await api('/admins')

        return dispatch(fetchAdmins(response.data))
    }
}
