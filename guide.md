# 1.前端工程化：将工具，技术，流程与经验进行规范化与标准化
## 模块化（js的模块术，css的模块化，资源的模块化）
## 组件化（复用现有的UI结构，样式，行为）
## 规范化（目录结构的划分，编码规范化，接口规范化，文档规范化，Git分支管理）
## 自动化（自动化构建，自动部署，自动化测试）
# 2.webpack:
## 前端工程化的具体解决方案，提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器JavaScript的兼容性、性能优化等强大的功能
## 配置：
### 1.在项目根目录中，创建名为 webpack.config.js 的webpack配置文件，并初始化乳腺的基本配置
```JavaScript
module.exports = {
    mode: 'development'  // mode 用来指定构建模式，可选值有development 和 production
}
// 其中 development 是开发环境，不会对打包产生的文件进行代码压缩和性能优化，打包速度快，适合在开发阶段使用
// production 是生产环境，会对打包生成的文件进行代码压缩和性能优化，
```
### 2.在package.json的script节点下，新增dev脚本如下
```json
"script": {
    "dev": "webpack" //script 节点下的脚本，可以通过 npm run 执行，例如 npm run dev
}
```
### 3.在终端运行 npm run dev 命令，启动webpack进行项目打包的构建,在webpack 4.x 和 5.x 版本中，有如下默认约定：
- 默认的打包入口文件为 src -> index.js
- 默认的输出文件路径为 dist -> main.js 
- 可以在webpack.config.js中修改打包路径