import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../shared/app'
import configureStore from '../shared/store/configureStore'
import createAxiosInstance from '../shared/config/axios'

const root = document.getElementById('__root')
const preloadedState = window.__PRELOADED_STATE__
const axiosInstance = createAxiosInstance()

Promise.resolve()
    .then(async () => {
        const store = configureStore(preloadedState, axiosInstance)

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
