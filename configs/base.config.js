var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV;
var isDevMode = NODE_ENV === 'development';

var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: isDevMode
});

module.exports = {

    context: path.join(__dirname, "../src"),

    entry: {
        main: "./js/main"
    },

    output: {
        path: path.join(__dirname, "../src"),
        filename: "[name].min.js",
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: isDevMode,
                                importLoaders: 2,
                                localIdentName: isDevMode ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                }),
            }
        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }),

        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
        }),

        extractSass
    ]
};