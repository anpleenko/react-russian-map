var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css', 'json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },{
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  }
};
