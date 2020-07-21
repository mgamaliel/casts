import { createSelector } from 'reselect'

const selectDefault = (state) => state.admins

export const selectAdmins = createSelector(
    [selectDefault],

    (admins) => admins
)
