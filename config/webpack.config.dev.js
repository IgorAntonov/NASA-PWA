const path = require('path') // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line
const WorkboxPlugin = require('workbox-webpack-plugin') // eslint-disable-line

const ROOT_DIR = path.resolve(__dirname, '../')

module.exports = {
  entry: path.resolve(ROOT_DIR, 'src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_DIR, 'build'),
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@features': path.resolve(ROOT_DIR, 'src/features'),
      '@core': path.resolve(ROOT_DIR, 'src/core'),
      '@lib': path.resolve(ROOT_DIR, 'src/lib'),
      '@ui': path.resolve(ROOT_DIR, 'src/ui'),
    },
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: '3000',
    contentBase: path.resolve(ROOT_DIR, 'public'),
    watchContentBase: true,
    publicPath: '/',
    clientLogLevel: 'none',
    compress: true,
    noInfo: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(ROOT_DIR, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_DIR, 'public/index.html'),
      inject: true,
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(ROOT_DIR, 'src/sw.js'),
    }),
  ],
}
