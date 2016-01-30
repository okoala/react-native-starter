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

  如果是下面的

  Error: Naming collision detected: /Users/koalahuang/Code/RNStarter/node_modules/react-web/node_modules/fbjs/flow/include/camelize.js collides with /Users/koalahuang/Code/RNStarter/node_modules/fbjs/lib/camelize.js

  则
  ```
  rm -rf node_modules/react-web/node_modules/fbjs
  ```
