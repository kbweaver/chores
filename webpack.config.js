module.exports = {
  devtool: 'source-map',
  entry: "./web/static/app/index.js",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
    }],
  },
  output: {
    path: "./priv/static/js",
    filename: "app.js",
  }
};
