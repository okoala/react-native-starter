## Intro

  **此项目是本人React Native应用的脚手架项目**。

  包含许多常用的模块~~以便达到快速开发~


## Technology

  - React Native
  - Redux
  - Immutable

## Install

  - 根据官网搞定RN一些基础环境 watchman、rnpm神马的~
  - git clone https://github.com/okoala/RNStarter.git && cd RNStarter
  - npm i --verbose

## 效果

![](http://i12.tietuku.com/557aac0ec5002602.jpg)
![](http://i11.tietuku.com/907f69490fb74055.jpg)

## Run

  - IOS: react-native run-ios
  - Android: react-native run-android
  - Web: npm run web

## 错误解决方案

  如果是 fbjs 的相关错误可以如下操作：
  ```
    1) rm -rf node_modules
    2) npm install
    3) npm install fbjs
    3) find . -name 'fbjs' -print
    4) manually remove all fbjs inside any node_module except one at top level
    5) rm -fr $TMPDIR/react-*
    6) watchman watch-del-all
    7) npm start --reset-cache
  ```

  如果 Invalid directory
  ```
    watchman watch-del-all
    npm cache clean && npm install
  ```

  如果是`string.contains is not a function`
  到 `node_modules/react-native/packager/react-packager/src/Resolver/polyfills/String.prototype.es6.js`
  添加如下代码
  ```
  if (!String.prototype.contains) {
    String.prototype.contains = function(search) {
      'use strict';
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var pos = arguments.length > 1 ?
        (Number(arguments[1]) || 0) : 0;
      return string.indexOf(String(search), pos) !== -1;
    }
  }
  ```
