var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/reactize.js",
  loaders: [
    {test: /\.coffee$/, loader: "coffee-loader"}
  ],
  plugins: [
    new webpack.DefinePlugin({
      // Force HTMLtoJSX to use the in-browser `document` object rather than
      // require the Node-only "jsdom" package.
      IN_BROWSER: true
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new CompressionPlugin({
            asset: "{file}.gz",
            algorithm: "gzip",
            regExp: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
  ],
  output: {
    path: __dirname + "/public/dist",
    filename: "reactize.min.js"
  }
};
