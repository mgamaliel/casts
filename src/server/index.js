import express from 'express'
import compression from 'compression'
import favicon from 'serve-favicon'
import { createProxyMiddleware } from 'http-proxy-middleware'
import handleSSR from './utils/server-side-render'

const server = express()
const port = process.env.PORT || 3000

server.use(compression())
server.use(favicon(`${__dirname}/public/favicon.png`))
server.use(express.static(`${__dirname}/public`, { index: false }))
server.use(createProxyMiddleware('/api', {
    target: 'http://react-ssr-api.herokuapp.com',

    changeOrigin: true,

    pathRewrite: {
        '^/api': '',
    },

    onProxyReq(proxyReq) {
        proxyReq.setHeader('x-forwarded-host', `localhost:${port}`)
    }
}))

server.get('*', handleSSR)

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
