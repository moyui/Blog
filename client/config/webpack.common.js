const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const utils = require('./utils');

module.exports = {
  entry: {
    app: utils.getPath('../src/index.jsx'),
    vender: ['lodash', 'react', 'react-dom', 'react-router-dom']
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      '@/url': utils.getPath('./fetch.js'),
      '@/gFetch': utils.getPath('../src/helper/gqlFetch.js')
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('moyui默羽'),
    new HtmlWebpackPlugin({
      title: 'moyui默羽的博客',
      template: utils.getPath('../assets/index.html'),
      chunksSortMode: 'none',
      inject: true,
      hash: true
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
};
