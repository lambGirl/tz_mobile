
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const Copy = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ParallelUglifyPlugin  =  require('webpack-parallel-uglify-plugin');

const webpackConfigProd = {
    devtool: 'cheap-module-source-map',
    output: {
        path: path.join(__dirname,"./public/main"),
        filename: '[name].[hash:4].js',
        chunkFilename: 'chunks/[name].[hash:4].js',
        publicPath:'/main/'
    },
  plugins: [

    new CleanWebpackPlugin([path.join(__dirname,'/public/main')]),


    new webpack.HashedModuleIdsPlugin(),    //缓存起来不变
    // 定义环境变量为生产环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IS_DEVELOPMETN: false,
    }),
    // 提取css
    // 根据入口文件，提取重复引用的公共代码类库，打包到单独文件中
    // new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      // 分析代码
    //new BundleAnalyzerPlugin({ analyzerPort: 3011 }),
    new Copy([
        {
            from: path.resolve(__dirname, 'views/static'),
            to: 'static',
            ignore: ['.*']
        }
    ]),
    new ParallelUglifyPlugin({
        uglifyJS:{}
    })
  ]
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
