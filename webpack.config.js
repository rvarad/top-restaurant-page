const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin  = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new FaviconsWebpackPlugin('./src/assets/favicon/pizza.png')
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};