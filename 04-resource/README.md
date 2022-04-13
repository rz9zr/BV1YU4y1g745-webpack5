# 资源模块(asset module)

- `asset/resource`：发送一个单独的文件并导出 URL

- `asset/inline`：导出资源的 Data URL

- `asset/source`：导出资源的源代码

- `asset`：在导出一个 Data URL 和发送一个单独文件之间自动进行选择

## resource 资源

```javascript
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },
```

### 设置打包后的资源文件名

#### 方式一

```javascript
output: {
    //...
    assetModuleFilename: 'assets/[contenthash][ext]',
}
```

- `assets/`：设置资源文件保存路径

- `[contenthash]`：使用内容的 hash 值作为文件名

- `[ext]`：资源文件的扩展名

#### 方式二

```javascript
  module: {
    rules: [
      {
        //...
        generator: {
          filename: "images/[contenthash][ext]",
        },
      },
    ],
  },
```

当两种方式同时存在时，优先使用第二种方式。

## inline 资源

```javascript
module: {
  rules: [
    //...
    {
      test: /\.svg$/,
      type: "asset/inline",
    },
  ];
}
```

## source 资源

```javascript
module: {
  rules: [
    //...
    {
      test: /\.txt$/,
      type: "asset/source",
    },
  ];
}
```

## 通用资源类型

在 `resource/inline` 之间自动作选择：

小于 8kb 作为 `inline`，否则作为 `resource`

```javascript
module: {
  rules: [
    //...
    {
      test: /\.jpg$/,
      type: "asset",
    },
  ];
}
```

可以设置这个规则，比如将大于 1M 的文件作为 `resource`:

```javascript
module: {
  rules: [
    //...
    {
      test: /\.jpg$/,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 1 * 1024 * 1024, // 1M
        },
      },
    },
  ];
}
```
