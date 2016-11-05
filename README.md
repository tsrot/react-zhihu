# 模仿知乎界面的一个简单React demo

地址：http://blog.xieliqun.com/2016/10/06/scope-chain-2/

> 这是一个模仿知乎界面的简单React demo。这个React demo能让你从零开始学习React，并逐渐掌握React。


----------

## 搭建开发环境

### 初始化npm bower

```javascript
npm init  //一直enter，默认就好

bower init //同上

```

### 安装必要的开发工具包

- gulp ：基于流的自动化构建工具
- gulp-browserify ：前端模块及依赖管理
- gulp-concat ：文件合并插件
- gulp-react ：JSX语法转化工具
- gulp-connect ：构建本地开发Web服务器
- lodash ：一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库
- reactify ：React 编译器

```javascript
npm install gulp gulp-browserify gulp-concat gulp-react gulp-connect lodash reactify --save-dev
```

### 安装生产环境依赖包

- react ：主要框架
- react-dom ：React的DOM操作类
- bootstrap ：bootstrap样式

```javascript
npm install --save react react-dom

bower install --save bootstrap
```

### 写入gulp配置文件gulpfile.js

你可以在npm的网站上找到相应插件的gulp配置写法。我配置的[gulpfile.js](https://github.com/tsrot/)


## 开发

- 切分相应的模块
- 分清UI组件和容器组件
- 学会如何在组件之间通信
- 注意写作规范和开发细节

## 后续

将在分支中更新使用下列技术的版本
- webpack
- webpack + redux
- webkack + redux + react-router