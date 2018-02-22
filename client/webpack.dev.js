const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-sourece-map',
  devServer: {
    contentBase: './assets/dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(_dirname, 'assets/dist');
  }
});