import nodeExternals from 'webpack-node-externals';
import prodConfig from './webpack.config.babel';

const testConfig = Object.assign(prodConfig, {
  externals: [nodeExternals()],
  target: 'node',
});

export default testConfig;
