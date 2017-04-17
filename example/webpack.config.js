var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'App.js'),

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?stage=0&optional[]=runtime',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
