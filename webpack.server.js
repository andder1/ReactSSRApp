const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack we're building a bundle for nodeJS rather than browser
  target: 'node',

  // root file fo our server app
  entry: './src/index.js',

  // where to place output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
