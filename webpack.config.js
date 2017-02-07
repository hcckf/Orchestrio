const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['webpack-hot-middleware/client', path.join(__dirname, 'app', 'app.js')],
  output: {
    path: path.join(__dirname, 'app', 'static', 'js'),
    filename: 'bundle.js',
    publicPath: path.join(__dirname, 'app', 'static', 'js')
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'app'),
      loader: ['babel-loader?' + JSON.stringify({
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015', 'react-hmre']
      })]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
