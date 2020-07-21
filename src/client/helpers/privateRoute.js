import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// selectors
import { selectIsAuthenticated } from '../selectors/user'

const privateRoute = (WrappedComponent) => {
    const Component = ({ isAuthenticated, ...otherProps }) => {
        return isAuthenticated
            ? <WrappedComponent {...otherProps} />
            : <Redirect to="/" />
    }

    Component.getInitialData = async (ctx) => {
        if (WrappedComponent.getInitialData) {
            await WrappedComponent.getInitialData(ctx)
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: selectIsAuthenticated(state)
    })

    return connect(mapStateToProps)(Component)
}

export default privateRoute
