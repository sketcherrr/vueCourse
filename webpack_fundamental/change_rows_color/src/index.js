// 使用es6导入jquery
import $ from 'jquery'
// 在webpack中一切皆模块，都可以通过es6导入语法进行导入
// 如果某个模块中，使用from接受到的成员为undefined，则没必要进行接收
import './css/index.css'
import './css/index.less'

// 导入图片，得到图片文件
import logo from '../../../img/logo.jpg'
// 给img标签动态赋值
$('.box').attr('src',logo)

// 定义jquery当入口函数
$(function() {
    // 实现奇偶行变色
    $('li:odd').css('background-color','wheat')
    $('li:even').css('background','pink')
})



// 定义一个装饰器函数
function info(target) {
    target.info = 'Person info'
}

// 定义一个普通的类
@info
class Person {}

console.log(Person.info);