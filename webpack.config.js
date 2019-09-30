const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "ReactTest",
      template: path.resolve(__dirname, "src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "babel-loader",
            options: { cacheDirectory: true }
          }
        ]
      }
    ]
  }
};
