const NodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig, {
    entry: './src/server',

    output: {
        path: `${__dirname}/build`,

        filename: 'server.js',

        publicPath: '/',
    },

    target: 'node',

    node: {
        __dirname: false,
    },

    externals: [NodeExternals()]
})
