// 使用es6导入jquery
import $ from 'jquery'

// 定义jquery当入口函数
$(function() {
    // 实现奇偶行变色
    $('li:odd').css('background-color','wheat')
    $('li:even').css('background','pink')
})