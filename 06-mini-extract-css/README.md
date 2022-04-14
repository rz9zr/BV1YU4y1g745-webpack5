# 抽离并压缩 CSS

## 抽离 CSS

### 安装

```bash
yarn add mini-css-extract-plugin -D
```

### 配置

#### 引入

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
```

#### `plugins` 配置

```javascript
  plugins: [
    //...
    new MiniCssExtractPlugin(),
  ],
```

#### `loader` 配置

> 将 `style-loader` 替换为 `MiniCssExtractPlugin.loader`

```javascript
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
```

#### 指定打包之后的文件名

```javascript
    new MiniCssExtractPlugin({
      filename: "assets/[contenthash].css",
    }),
```

## 压缩 CSS

### 安装

```bash
yarn add css-minimizer-webpack-plugin -D
```

### 配置

#### 引入

```javascript
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
```

#### `optimization`

```javascript
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
  },
```

#### `mode`

```javascript
mode: "production";
```
