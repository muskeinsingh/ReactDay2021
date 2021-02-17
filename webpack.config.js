const path = require('path');
const webpack = require('webpack');
const appDirectory = path.resolve(__dirname, './');
module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.js')],
  mode: process.env.NODE_ENV || 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(appDirectory, 'public'),
  },
  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules\/.*/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      __DEV__: process.env.NODE_ENV === 'production' || true,
    }),
  ],
  resolve: {
    alias: {
      'react-native$': path.resolve(
        __dirname,
        './node_modules/react-native-web',
      ),
    },
    extensions: ['.web.jsx', '.web.js', '.jsx', '.js', '.android.js'],
    modules: ['node_modules'],
  },
};
