module.exports = {
  devtool: 'source-map',
  entry: "./web/static/app/index.jsx",
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
