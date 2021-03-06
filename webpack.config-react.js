var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "public_html/src/hello.jsx",
    output: {
        filename: "public_html/build/js/hello.min.js"
    },
    resolve: {
        root: path.resolve(__dirname)
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", 'resolve-url?sourceMap', "sass?sourceMap"]
            }
        ]
    },
    cache: false,
    devtool: 'source-map'
};