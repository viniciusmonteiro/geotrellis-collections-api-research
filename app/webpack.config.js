const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './js/Main.jsx',
        vendor: [
            'axios',
            'leaflet',
            'leaflet-draw',
            'lodash',
            'materialize-css',
            'react',
            'react-addons-shallow-compare',
            'react-dom',
            'react-leaflet',
            'react-leaflet-control',
            'react-leaflet-draw',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-devtools',
            'redux-logger',
            'redux-thunk',
            'victory'
        ]
    },
    output: {
        path: __dirname,
        filename: "geotrellis.api.research.[hash].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.geotrellis.api.research.[hash].js',
            minChunks: Infinity,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.jsx?$/,
            options: {
                eslint: {
                    configFile: '.eslintrc',
                },
            },
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
        new HtmlWebpackPlugin({
            title: 'react-leaflet-pouchdb',
            filename: 'index.html',
            template: 'template.html'
        }),
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options:
            {
                presets:['es2015', 'react'],
                plugins: ['transform-class-properties'],
                env: {
                    development: {
                        presets: ['react-hmre'],
                    },
                },
            },
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(jpg|gif|png|svg|ttf|eot|woff|woff2)$/,
            use: 'url-loader',
        },
        {
            test: /\.jsx?/,
            exclude: [/node_modules/, /\.json$/],
            loader: 'eslint-loader',
        }]
    },
    watchOptions: {
        poll: 1000,
    },
    devServer: {
        historyApiFallback: {
            index: '/',
        },
    },
};