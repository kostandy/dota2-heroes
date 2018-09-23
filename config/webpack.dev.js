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
        test: /\.styl/,
        exclude: /node_modules/,
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
            loader: 'stylus-loader',
          },
        ],
      },
    ],
  },
};
