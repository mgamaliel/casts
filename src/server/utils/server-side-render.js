import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { promisify } from 'util'
import { readFile } from 'fs'
import { resolve } from 'path'
import App from '../../shared/app'

const readFileAsync = promisify(readFile)
const templatePath = resolve(__dirname, 'public/index.html')

const handleSSR = async (req, res) => {
    const data = await readFileAsync(templatePath, 'utf8')
    const context = {}

    try {
        const content = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>

                <App />

            </StaticRouter>
        )

        const html = data.replace('<div id="__root"></div>', `<div id="__root">${content}</div>`)

        res.send(html)
    } catch {
        res.status(500).send('Internal server error')
    }
}

export default handleSSR
