module.exports = {
    entry: './src/index.js',  // 入口文件
    mode: 'none', // 模式
    output: {
        filename: 'bundle.js', // 打包输出的文件名
        path: require('path').resolve(__dirname, './dist'), // 打包输出的路径
    }
}
