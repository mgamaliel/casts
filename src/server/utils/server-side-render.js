import React from 'react'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { promisify } from 'util'
import { readFile } from 'fs'
import { resolve } from 'path'
import App from '../../shared/app'
import configureStore from '../../shared/store/configureStore'
import routes from '../../shared/routes'

const readFileAsync = promisify(readFile)
const templatePath = resolve(__dirname, 'public/index.html')

const handleSSR = async (req, res) => {
    const data = await readFileAsync(templatePath, 'utf8')
    const context = {}
    const store = configureStore()
    const currentRoute = routes.find((route) => matchPath(req.url, route))

    if (currentRoute && currentRoute.component.getInitialData) {
        await currentRoute.component.getInitialData({ req, res, store })
    }

    try {
        const content = ReactDOMServer.renderToString(
            <Provider store={store}>

                <StaticRouter location={req.url} context={context}>

                    <App />

                </StaticRouter>

            </Provider>
        )

        const html = data
            .replace('</head>', `<script>window.__PRELOADED_STATE__ = ${serialize(store.getState())}</script></head>`)
            .replace('<div id="__root"></div>', `<div id="__root">${content}</div>`)

        res.send(html)
    } catch {
        res.status(500).send('Internal server error')
    }
}

export default handleSSR
