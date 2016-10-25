import prodConfig from './webpack.config.babel';
import nodeExternals from 'webpack-node-externals';

const testConfig = Object.assign(prodConfig, {
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
});

testConfig.module.loaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
},
{
  test: /\.css$/,
  loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
}];

export default testConfig;
