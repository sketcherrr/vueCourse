const path = require('path')

// 导入 html-webpack-plugin 插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制那个文件
    template: './src/index.html',
    // 指定复制出来的文件的存放路径
    filename: './index.html'
})

//  使用Node.js中的语法，向外导出一个 webpack 的配置对象
module.exports = {
    mode: 'production',  // mode 用来指定构建模式，可选值有development 和 production

    // 通过 entry 节点指定打包的入口，通过output节点指定打包的出口
    entry:path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },

    // 将插件进行挂载，在运行webpack时，会加载这些插件
    plugins:[htmlPlugin]
}