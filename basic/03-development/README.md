# 搭建开发环境

## source map

```javascript
devtool: 'inline-source-map',
```

## watch mode(观察模式)

启动 webpack 时，添加 `--watch` 参数

```bash
npx webpack --watch
```

## webpack-dev-server

### 安装

```bash
yarn add webpack-dev-server -D
```

### 配置

```javascript
  devServer: {
    static: "./dist",
  },
```

### 启动

```bash
npx webpack-dev-server
```
