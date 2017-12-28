const path = require('path'); //basic module for correct work app on windows and linux
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');*/

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.source + '/pages/blog/blog.pug'
            }),
        ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            }
        ]
    }
}

