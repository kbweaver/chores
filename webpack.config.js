var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]") 
    }],
  },
  output: {
    path: "./priv/static",
    filename: "js/app.js",
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ]
};
