
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
      },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
     
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader","postcss-loader","sass-loader"
          
        ],
      },
      {
        test:/\.(png|svg|jpg|gif|webp)$/,
        type: 'asset/resource'
      }
    ],
  },
  mode: "development",
  
});
