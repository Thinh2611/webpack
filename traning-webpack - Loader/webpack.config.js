const path = require('path');

module.exports = {
  // File JS chính của dự án
  entry: './src/index.js',

  // File đầu ra sau khi build
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Chọn mode: development (dev) hoặc production (build chính thức)
  mode: 'development',

  // Cấu hình loader
  module: {
    rules: [
      {
        test: /\.js$/,           // Áp dụng cho file .js
        exclude: /node_modules/, // Bỏ qua thư mục node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Dùng preset hiện đại của Babel
          },
        },
      },
    ],
  },
};
