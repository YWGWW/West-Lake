const HtmlWebpackPlugin = require('html-webpack-plugin');  //HTML的打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //CSS的打包
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //CSS的压缩
const CopyWebpackPlugin = require('copy-webpack-plugin'); //不需要带包的使用这个插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //打包前先清空产出物的文件夹

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static', to: 'static' },

      ]
    }),
    new HtmlWebpackPlugin({
      title: 'plugin demo',
      minify: true,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }
  
};