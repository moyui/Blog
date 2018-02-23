const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//let pathsToClean = [
  //'./assets/dist',
  //'../build/dist'
//];

module.exports = {
  entry: {
    app: './src/index.js',
    vender: [
      'react',
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux'
    ]
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },{
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 'css-loader',
            options: {
              module: true,
            }
          }
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(pathsToClean),
    new webpack.BannerPlugin('moyui末御'),
    new HtmlWebpackPlugin({
      template: __dirname + "/assets/dist/index.html"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("style.css")
  ]
};