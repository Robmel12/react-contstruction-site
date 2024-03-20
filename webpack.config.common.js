
const path = require("path");



module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [{
            loader: 'html-loader',
          }],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/,
        type: 'asset/resource',
        
      },
    ],
  },
};