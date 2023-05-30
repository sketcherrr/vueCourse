import Vue from 'vue'
import App from './App.vue'
// 导入需要注册的全局组件
import Count from '@/components/Count.vue'

Vue.config.productionTip = false

// 参数一：字符串格式，表示组件的“注册名称”
// 参数二：需要被全局注册的那个组件
Vue.component('MyCount',Count)

new Vue({
  render: h => h(App),
}).$mount('#app')
