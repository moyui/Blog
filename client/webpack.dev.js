const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(_dirname, 'assets/dist');
  }
  devtool: 'inline-sourece-map',
  devServer: {
    contentBase: './assets/dist'
  },
});