const path = require('path')

//  使用Node.js中的语法，向外导出一个 webpack 的配置对象
module.exports = {
    mode: 'production',  // mode 用来指定构建模式，可选值有development 和 production

    // 通过 entry 节点指定打包的入口，通过output节点指定打包的出口
    entry:path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    }
}