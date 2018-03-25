const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './assets/dist')
  },
  devtool: 'inline-sourece-map',
  devServer: {
    contentBase: './assets/dist',
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});