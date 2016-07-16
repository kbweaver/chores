module.exports = {
  devtool: 'source-map',
  entry: "./web/static/app/index.js",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  output: {
    path: "./priv/static/js",
    filename: "app.js",
  }
};
