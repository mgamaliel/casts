import { createSelector } from 'reselect'

const selectDefault = (state) => state.user

export const selectIsAuthenticated = createSelector(
    [selectDefault],

    (user) => !!user
)
