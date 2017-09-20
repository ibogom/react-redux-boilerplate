var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {

    target: 'node',

    /** THIS METHOD EXCLUDE MODULES FROM BUNDLE **/
    externals: [
        nodeExternals()
    ],

    plugins: [

        extractSass,

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }),

        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),

        new webpack.NoEmitOnErrorsPlugin()
    ]
};