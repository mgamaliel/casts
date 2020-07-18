import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const App = () => (
    <Switch>

        {routes.map(({ id, ...otherProps }) => <Route key={id} {...otherProps} />)}

    </Switch>
)

export default App
