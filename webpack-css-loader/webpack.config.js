const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 📁 File JS chính của dự án
  entry: './src/index.js',

  // 📦 File đầu ra sau khi build
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true, // Xóa thư mục build cũ trước khi build mới
  },

  // ⚙️ Chế độ: development hoặc production
  mode: process.env.NODE_ENV || 'development',

  // 🔄 Cấu hình loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // 👉 Khi build production: tách CSS ra file riêng
          // 👉 Khi dev: inject CSS vào HTML bằng style-loader
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  // 🔌 Plugin
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // 🎯 Tên file CSS sau khi build
    }),
  ],

  // 🚀 Source map để debug
  devtool: 'source-map',

  // 🌐 Cấu hình server dev
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 3000,
    open: true,
    hot: true,
  },
};
