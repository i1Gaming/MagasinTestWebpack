const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/styles/style.scss', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'ignore.js' 
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,  
        type: 'asset/resource', 
        generator: {
          filename: 'fonts/[name][ext]', 
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css', 
    }),
  ],
  mode: 'production',
};