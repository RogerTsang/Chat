const path = require("path");
const webpack = require("webpack");

const entry_point = path.resolve(__dirname, './roject/roject/static/js/index.js');
const build_dir = path.resolve(__dirname, './roject/roject/static/build');

module.exports = {
    entry: [entry_point],
    output: {
        path: path.resolve(__dirname, build_dir),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                  presets:[ 'es2015', 'react', 'stage-3' ],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};
