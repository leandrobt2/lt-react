const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const outputPath = path.join(__dirname, "../dist");
const outputAssetPath = path.join(outputPath, "/assets");
const outputAssetCssPath = path.join(outputAssetPath, "/css");
const outputAssetJsPath = path.join(outputAssetPath, "/js");
const outputAssetImgPath = path.join(outputAssetPath, "/image");

module.exports = {
    entry: path.join(__dirname, "/../src/index.jsx"),
    output: {
        path: outputPath,
        filename: "bundle.js",
        sourceMapFilename: "bundle.map",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["es2015", { "modules": false }],
                                'stage-0',
                                'react'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/template.html')
        })
        // new CopyWebpackPlugin([
        //     //{ from: 'src/assets/image', to: outputAssetImgPath }
        //     //{ from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: outputAssetCssPath }
        // ]),
        // new HtmlWebpackIncludeAssetsPlugin({
        //     assets: ['assets/js/bootstrap.min.js', 'assets/css/bootstrap.min.css'],
        //     append: false
        // })
    ],
    devServer: {
        contentBase: outputPath,
        hot: true,
        open: true
    }
}