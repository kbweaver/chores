module.exports = {
  devtool: 'source-map',
  entry: "./web/static/app/index.jsx",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  output: {
    path: "./priv/static/js",
    filename: "app.js",
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
