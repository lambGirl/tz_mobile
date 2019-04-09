
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const PORT = 3010
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true,
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('./views'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: PORT,
    proxy: {
        "/api": {
            target: "http://localhost:5000",
            secure: false
        }
    }
  },

}

module.exports = merge(webpackConfigBase, webpackConfigDev)
