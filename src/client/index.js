import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../shared/app'
import configureStore from './store/configureStore'

const root = document.getElementById('__root')
const store = configureStore()

const CastsApp = () => (
    <Provider store={store}>

        <BrowserRouter>

            <App />

        </BrowserRouter>

    </Provider>
)

ReactDOM.render(<CastsApp />, root)
