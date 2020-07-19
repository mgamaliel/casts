import { createSelector } from 'reselect'

const selectDefault = (state) => state.users

export const selectUsers = createSelector(
    [selectDefault],

    (users) => users
)
