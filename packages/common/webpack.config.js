const {resolve} = require('path');

module.exports = {
  entry: "./index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: [
    'react',
    'react-dom'
  ],
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.ts|\.tsx$/, use: 'ts-loader'}
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // Enable sourcemaps for debugging webpack's output.
  // devtool: "source-map",

};