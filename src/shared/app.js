import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from './routes'
// components
import Navbar from '../client/components/Navbar'
// actions
import { fetchCurrentUserAsync } from '../client/actions/user'

const App = (props) => {
    React.useEffect(() => {
        props.fetchCurrentUser()
    }, [])

    return (
        <>
            <Navbar />

            <Switch>

                {routes.map(({ id, ...otherProps }) => <Route key={id} {...otherProps} />)}

            </Switch>
        </>
    )
}

App.getInitialData = async ({ store }) => {
    await store.dispatch(fetchCurrentUserAsync())
}

const mapDispatchToProps = (dispatch) => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUserAsync())
})

export default connect(undefined, mapDispatchToProps)(App)
