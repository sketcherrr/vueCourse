// 使用es6导入jquery
import $ from 'jquery'
// 在webpack中一切皆模块，都可以通过es6导入语法进行导入
import './css/index.css'

import './css/index.less'

// 定义jquery当入口函数
$(function() {
    // 实现奇偶行变色
    $('li:odd').css('background-color','wheat')
    $('li:even').css('background','pink')
})