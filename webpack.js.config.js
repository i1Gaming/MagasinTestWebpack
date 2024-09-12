const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production', 
};