module.exports = {
    mode: 'development',
    entry: './src/index.js', //入口文件的位置
    output: { //出口
        path: __dirname + '/dist', //出口文件的位置
        filename: 'index.js' //打包后文件的名字
    },
    module: {
        // loader
        rules: [
            {//css loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { //less loader
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                //图片loader
                test: /\.(png|jpg|gif|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192*10,
                            // fallback:'file-loader'
                        }
                    }
                ]
            }

        ]
    }
    
}