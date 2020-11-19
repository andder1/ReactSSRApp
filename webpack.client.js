const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // root file fo our server app
  entry: './src/client/client.js',

  // where to place output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  }
};

module.exports = merge(baseConfig, config);
