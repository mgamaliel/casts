const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    module: {
        rules: [

            {
                test: /\.js$/,

                exclude: /node_modules/,

                loader: 'babel-loader',
            }

        ]
    },
    plugins: [

        new CleanWebpackPlugin(),

        new webpack.DefinePlugin({
            'process.env.BASE_URL_API': JSON.stringify('https://react-ssr-api.herokuapp.com')
        })

    ]
}
