const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const utils = require('./utils');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: utils.getPath('../dist')
  },
  devtool: 'inline-sourece-map',
  devServer: {
    contentBase: '../dist',
    hotOnly: true,
    inline: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
