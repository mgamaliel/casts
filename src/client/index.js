import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/app'

const root = document.getElementById('__root')

const CastsApp = () => (
    <BrowserRouter>

        <App />

    </BrowserRouter>
)

ReactDOM.render(<CastsApp />, root)
