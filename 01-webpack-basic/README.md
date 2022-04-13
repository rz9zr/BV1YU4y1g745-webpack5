# webpack5 基础

## 安装 webpack

### 全局安装(不推荐)

```bash
npm install -g webpack webpack-cli
```

### 当前工作目录安装

```bash
yarn add webpack webpack-cli -D
```
## 运行 webpack

```bash
npx webpack
```

### 选项

- `--stats detailed`：显示打包详情

- `--entry <文件路径>`：指定入口文件

- `--mode <production|development>`：指定模式

## 配置

> `webpack.config.js`

```javascript
module.exports = {
    entry: './src/index.js',  // 入口文件
    mode: 'none', // 模式
    output: {
        filename: 'bundle.js', // 打包输出的文件名
        path: require('path').resolve(__dirname, './dist'), // 打包输出的路径
    }
}
```
