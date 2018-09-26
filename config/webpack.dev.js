const path = require('path');
const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              url: true,
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: path.resolve(__dirname, '../src'),
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              url: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:3]',
            },
          },
          {
            loader: 'theme-loader',
          },
        ],
      },
    ],
  },
};
