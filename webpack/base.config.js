const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Extracts the SCSS to a file
const extractSASS = new MiniCssExtractPlugin({
  filename: './main.css'
});

module.exports = {
  devtool: 'cheap-module-source-map',
  // Webpack checks this file for any additional JS dependencies to be bundled
  entry: path.resolve(__dirname, '../src/index.js'),

  output: {
    // Output folder in which the files will be built
    path: path.resolve(__dirname, '../out'),
    // All the JS files will be bundled in this one minified/obfuscated file
    filename: './js/[name].bundle.js'
  },

  node: {
    fs: 'empty',
    repl: 'empty'
  },

  module: {

    rules: [
      // Loader for the image files
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },

      // Loader for the fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },

      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../app'),
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      moment: path.resolve(__dirname, '../node_modules/moment')
    }
  },

  plugins: [
    // Directly copies certain files
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
      { from: './src/assets/img/favicon.png', to: './' }
    ]),
    extractSASS
  ]

};