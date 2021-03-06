const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');

const config = {
  entry: ['babel-polyfill', path.resolve(sourcePath, 'App.js')],
  target: "node",
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      path.join(__dirname, 'lib'),
      path.resolve(__dirname, 'node_modules'),
      // yarn-workspaces
      path.resolve(__dirname, '../../node_modules'),
    ],
  },
  externals: {
        "globoplay": "commonjs globoplay",
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: sourcePath,
      },
    ],
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
        },
      },
    })
  );
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  );
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  config.plugins.push(new webpack.HashedModuleIdsPlugin());
}

module.exports = config;
