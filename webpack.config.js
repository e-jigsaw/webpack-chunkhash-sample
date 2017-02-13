const path = require('path')
const {CommonsChunkPlugin} = require('webpack').optimize

module.exports = {
  entry: {
    index: './index.js',
    index1: './index1.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: 'http://localhost:9999/build/'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js'
    }),
    new CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[chunkhash].js'
    })
  ]
}
