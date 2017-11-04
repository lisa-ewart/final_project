const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  entry: './src/index.js',
  output: { path: __dirname, filename: './dist/bundle.js' },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
};
