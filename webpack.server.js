const NodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
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

    externals: [NodeExternals()],

    plugins: [

        new webpack.DefinePlugin({
            __isServer__: true,

            'process.env.BASE_URL_API': JSON.stringify('https://react-ssr-api.herokuapp.com')
        })

    ]
})
