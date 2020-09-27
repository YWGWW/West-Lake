module.exports = {
    mode:'development',
    entry: './src/index.js', //入口文件的位置
    output: { //出口
        path: __dirname+'/dist', //出口文件的位置
        filename: 'index.js' //打包后文件的名字
    }
  }