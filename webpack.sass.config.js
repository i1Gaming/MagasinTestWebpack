const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/styles/style.scss',  // Входная точка для SCSS
  output: {
    path: path.resolve(__dirname, 'dist'),  // Папка для выходных файлов
    filename: 'ignore.js'  // Фиктивный JS файл
  },
  module: {
    rules: [
      {
        test: /\.scss$/,  // Для обработки SCSS файлов
        use: [
          MiniCssExtractPlugin.loader,  // Извлечение CSS в отдельный файл
          'css-loader',   // Преобразование CSS в CommonJS
          'sass-loader'   // Компиляция SCSS в CSS
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,  // Для обработки файлов шрифтов
        type: 'asset/resource',  // Webpack встроенная обработка ресурсов
        generator: {
          filename: 'fonts/[name][ext]',  // Путь для сохранения шрифтов в dist/fonts
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',  // Название итогового CSS файла
    }),
  ],
  mode: 'production',
};