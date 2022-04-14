# 自动引入资源

> [Webpack 插件](https://webpack.js.org/plugins/)

## HtmlWebpackPlugin

> [文档](https://webpack.js.org/plugins/html-webpack-plugin/)

### 安装

```bash
yarn add html-webpack-plugin -D
```

### 配置

> `webpack.config.js`

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //...
  plugins: [new HtmlWebpackPlugin()],
};
```

### 配置使用我们自己的`index.html`

```javascript
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 模板文件
      filename: "app.html", // 打包输出的文件名
      inject: "body", // 将 script 标签生成到 body 标签里
    }),
  ],
```

| 参数       | 说明                                                     |
| ---------- | -------------------------------------------------------- |
| `template` | 要使用的模板文件                                         |
| `filename` | 打包输出的文件名                                         |
| `inject`   | 将`<script>`标签生成到`<body>`中（默认生成在`<head>`中） |

## 清理 `dist`

`output` 增加 `clean:true`：

```javascript
  output: {
    //...
    clean: true,
  },
```
