import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../shared/app'
import configureStore from '../shared/store/configureStore'
// actions
import { fetchCurrentUserAsync } from './actions/user'

const root = document.getElementById('__root')
const preloadedState = window.__PRELOADED_STATE__

Promise.resolve()
    .then(async () => {
        const store = configureStore(preloadedState)

        await store.dispatch(fetchCurrentUserAsync())

        return store
    })
    .then((store) => {
        const CastsApp = () => (
            <Provider store={store}>

                <BrowserRouter>

                    <App />

                </BrowserRouter>

            </Provider>
        )

        ReactDOM.render(<CastsApp />, root)
    })
    .finally(() => {
        delete window.__PRELOADED_STATE__
    })
