const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      
      {
        test: /\.(md|jpg|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
      
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),

  ],
  
}
