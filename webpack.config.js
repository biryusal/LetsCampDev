const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: [
    './src/index.js'
  ],
  output:{
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: "/"
            }
          },
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning',
              minimizerOptions: {
                plugins: ['gifsicle'],
              }
            }
          }
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  optimization: {
    minimize: false,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      }),
      new HtmlMinimizerPlugin({
        test: /\.foo\.html/i,
      })
    ]
  },
  devServer: {
    port: 80,
    contentBase: './dist',
    hot: true,
    open: true,
    openPage: '',
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico"
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};