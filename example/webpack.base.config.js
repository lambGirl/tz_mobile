
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigBase = {
  entry: {
    client: resolve('./app.js'),
    vendor: ['react', 'react-router-dom', 'react-dom', ]
  },
  output: {
    path: path.join(__dirname,"./public/main"),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
      alias:{
        "js":path.join(__dirname, 'src/*')
      }
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use:{
            loader: 'babel-loader',
            options: {
                presets:["@babel/react","@babel/preset-env"],
                plugins:[
                    "@babel/plugin-syntax-dynamic-import",
                    "@babel/plugin-proposal-class-properties",
                    ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ]
            }
        }
      },
      /*{
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            { loader: 'css', options: { sourceMap: true } }
          ]
        }),
      },*/
       /* {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style',
                use: [
                    { loader: 'css', options: { sourceMap: true } },
                    { loader: 'less', options: { sourceMap: true } }
                ]
            }),
        },*/
        {
            test: /\.css/,
            use: [
               "style-loader","css-loader?modules_"
            ]
        },
        {
            test: /\.less$/,
            use: [
                { loader: 'style', options: { sourceMap: false } },
                { loader: 'css', options: { sourceMap: false, modules:true} },
                { loader: 'less', options: {
                    sourceMap: false,
                    modules:true,
                } }
            ]
        },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]',
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      },
    ],
  },
  plugins: [
    // 提取css
    /*new ExtractTextPlugin({filename:"/css/[name].min.css"
    }),*/

// 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
            // any required modules inside node_modules are extracted to vendor
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, '../node_modules')
                ) === 0
            )
        }
    }),
  ]
}

module.exports = webpackConfigBase
