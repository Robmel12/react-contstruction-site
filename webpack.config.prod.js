const path =  require('path');
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common')
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    output: {
      filename: "bundle.[hash].js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'images/[hash][ext][query]'
    },
    
    optimization: {
        minimizer: [
          new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        ],
      },
    module: {
      rules: [
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [{
              loader: MiniCssExtractPlugin.loader,
          }, "css-loader", "postcss-loader", 'sass-loader'],
        },
      ],
    },
    plugins:[
        new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
          new CleanWebpackPlugin()
        
    ],
    mode: 'production'
  });