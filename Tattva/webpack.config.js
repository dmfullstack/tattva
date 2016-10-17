var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [path.join(__dirname, "webclient", "clientapp.jsx")]
  },
  output: {
    path: path.join(__dirname, "webclient", "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: "babel"
        }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '/index.js', '/index.jsx']
  },
  plugins: []
}