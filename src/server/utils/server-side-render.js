import React from 'react'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { promisify } from 'util'
import { readFile } from 'fs'
import { resolve } from 'path'
import App from '../../shared/app'
import configureStore from '../../shared/store/configureStore'
import routes from '../../shared/routes'
import createAxiosInstance from '../../shared/config/axios'

const readFileAsync = promisify(readFile)
const templatePath = resolve(__dirname, 'public/index.html')

const handleSSR = async (req, res) => {
    const data = await readFileAsync(templatePath, 'utf8')
    const context = {}
    const cookie = req.get('cookie') || ''
    const headers = { cookie }
    const axiosInstance = createAxiosInstance(headers)
    const store = configureStore({}, axiosInstance)
    const ctx = { req, res, store }

    await App.getInitialData(ctx)

    try {
        const currentRoute = routes.find((route) => matchPath(req.url, route))

        if (currentRoute && currentRoute.component.getInitialData) {
            await currentRoute.component.getInitialData(ctx)
        }

        const content = ReactDOMServer.renderToString(
            <Provider store={store}>

                <StaticRouter location={req.url} context={context}>

                    <App />

                </StaticRouter>

            </Provider>
        )

        const helmet = Helmet.renderStatic()

        const html = data
            .replace('</head>', `${helmet.title.toString()}</head>`)
            .replace('</head>', `<script>window.__PRELOADED_STATE__ = ${serialize(store.getState())}</script></head>`)
            .replace('<div id="__root"></div>', `<div id="__root">${content}</div>`)

        if (context.notFound) {
            res.status(404)
        }

        res.send(html)
    } catch (error) {

        if (error.isAxiosError) {
            if (error.response.status === 401) {
                res.redirect(303, '/')
            }
        } else {
            res.status(500).send('Internal server error')
        }
    }
}

export default handleSSR
