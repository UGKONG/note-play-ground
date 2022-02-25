const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': __dirname + '/src/',
      '@modules': __dirname + '/modules/',
      '@styles': __dirname + '/modules/common.scss',
      '@reset': __dirname + '/public/reset.scss',
      '@react-hook': __dirname + '/modules/reactHook.js',
    }
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i, exclude: /node_modules/, use: ['babel-loader']
      }, {
        test: /\.(avi|mp4|wav|webm)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: './videos',
            name: '[name].[ext]'
          }
        }]
      }, {
        test: /\.(png|jpg|gif|bmp|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: './images',
            name: '[name].[ext]'
          }
        }]
      }, {
        test: /\.(c|sa|sc)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.html$/i, use: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
  ],
  devServer: {
    open: true
  }
}