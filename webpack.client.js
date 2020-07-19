const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = (env) => {
    const isProduction = env === 'production'
    const baseURL = isProduction
        ? '/api'
        : 'https://react-ssr-api.herokuapp.com'

    return merge(baseConfig, {
        entry: './src/client',

        output: {
            path: `${__dirname}/build/public`,

            filename: 'js/[name].js',

            publicPath: '/',
        },

        plugins: [

            new HtmlWebpackPlugin({
                template: './src/shared/template.html',

                favicon: './src/shared/favicon.png',

                minify: { collapseWhitespace: isProduction },
            }),

            new webpack.DefinePlugin({
                __isServer__: false,

                'process.env.BASE_URL_API': JSON.stringify(baseURL)
            })

        ],

        devtool: isProduction ? 'hidden-source-map' : 'source-map',

        devServer: {
            contentBase: `${__dirname}/build/public`,

            historyApiFallback: true,

            port: 4262,
        }
    })
}
