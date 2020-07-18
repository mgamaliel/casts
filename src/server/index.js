import express from 'express'
import compression from 'compression'
import favicon from 'serve-favicon'
import handleSSR from './utils/server-side-render'

const server = express()
const port = process.env.PORT || 3000

server.use(compression())
server.use(favicon(`${__dirname}/public/favicon.png`))
server.use(express.static(`${__dirname}/public`, { index: false }))

server.get('*', handleSSR)

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
