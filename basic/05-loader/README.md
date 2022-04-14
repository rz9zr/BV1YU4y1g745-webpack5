# loader

## 加载 CSS

### 安装

```bash
yarn add style-loader css-loader -D
```

### 配置

```javascript
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
```

`use` 数组两个元素的顺序不能颠倒。

## LESS

### 安装

```bash
yarn add less less-loader -D
```

### 配置

```javascript
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
```
