const path = require('path');

module.exports = {
  entry: './src/index.js',  // Входная точка для вашего JS файла
  output: {
    filename: 'main.js',  // Название скомпилированного JS файла
    path: path.resolve(__dirname, 'dist/js'),  // Путь для выходного JS файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Для обработки всех JS файлов
        exclude: /node_modules/,  // Исключаем node_modules
        use: {
          loader: 'babel-loader',  // Используем babel-loader для транспиляции JS (установите babel-loader и @babel/core)
        },
      },
    ],
  },
  mode: 'production',  // Устанавливаем режим production для минификации кода
};