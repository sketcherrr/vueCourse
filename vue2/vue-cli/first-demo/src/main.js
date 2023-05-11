// 导入vue包，得到vue构造函数
import Vue from 'vue'
// 导入App.vue根组件，将来要把app.vue的模板结构，渲染到html页面中
// import App from './App.vue'
import App from './Test.vue'

Vue.config.productionTip = false

// 创建vue实例对象
new Vue({
  // el:'#app',
  // 把render函数指定的组件，渲染到html页面中
  // render函数中，渲染的是哪个 .vue 组件，那么这个组件就是根组件
  render: h => h(App),
}).$mount('#app')  
//vue实例的$mount('#app') 方法与el属性作用完全相同