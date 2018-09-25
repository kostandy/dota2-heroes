const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  favicon: path.resolve(__dirname, '../', 'src/static/logo/favicon.ico'),
  staticFolder: 'static/',
  imagesFolder: 'static/images',
  fontsFolder: 'static/fonts',
  cssFolder: 'static/css',
  jsFolder: 'static/js',
};
