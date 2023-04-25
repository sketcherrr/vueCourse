module.exports = {
    // 声明 babel 可用的插件
    // 将来webpack在调用babel-lodaer的时候，会吸纳加载plugins功能来使用
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}