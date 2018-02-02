const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: __dirname + "\\index.jsx",
    output: {
        path: path.resolve(__dirname, "/dist/assets"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    // apply multiple loaders and options
                    "babel-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                'env',
                                'stage-0',
                                'react'
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}