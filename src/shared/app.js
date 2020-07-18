import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
// components
import Navbar from '../client/components/Navbar'

const App = () => (
    <>
        <Navbar />

        <Switch>

            {routes.map(({ id, ...otherProps }) => <Route key={id} {...otherProps} />)}

        </Switch>
    </>
)

export default App
