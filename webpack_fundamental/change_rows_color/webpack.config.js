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

// 注意，左侧的花括号是解构赋值
// 此插件可以实现每次打包发布时，自动清理之前的打包
const  {CleanWebpackPlugin}  = require('clean-webpack-plugin')

//  使用Node.js中的语法，向外导出一个 webpack 的配置对象
module.exports = {
    mode: 'development',  // mode 用来指定构建模式，可选值有development 和 production

    // 在开发调试阶段，建议吧devtool的值设置为 eval-source-map
    // 实际发布时，设置为nosource-source-map或直接关闭source mao
    devtool: 'nosources-source-map',

    // 通过 entry 节点指定打包的入口，通过output节点指定打包的出口
    entry:path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'js/bundle.js'
    },

    // 将插件进行挂载，在运行webpack时，会加载这些插件
    plugins:[htmlPlugin, new CleanWebpackPlugin()],

    // 配置新节点，令webpack打包完成后自动打开浏览器
    devServer:{
        open: true, // 首次打包完成后，是否自动打开浏览器
        port: 8080,  // 自定义端口号
        host: '127.0.0.1', //指定运行的地址
    },

    // 所有第三方文件模块的匹配规则
    module: {
        // 文件名的匹配规则
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 .less 文件的loader
            { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片类型文件的loader，其中limit规定传入的图片大小的字节数，如果符合要求，则打包图片为base64格式的文件，如果不符合要求，则传入图片的相对路径
            // 如果需要调用的loader只有一个，只需要传字符串，如果有多个，需要传数组
            // 在配置url-loader的时候，多个参数之间使用and符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=2700&outputPath=images'},
            // 使用 babel 来处理高级的js语法
            // exclude 代表排除项，程序员只关心自己的代码即可，一定要排除node_modules
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}