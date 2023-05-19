<template>
  <div class="app-container">
    <h1>App 根组件 --- {{ countFromSon }}</h1>
    <p>{{ message }}</p>
    <p>{{ userinfo }}</p>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 父向子组件传递数据 -->
      <Left :msg="message" :user="userinfo"></Left>
      <!-- 子向父组件传递数据,需要使用自定义事件 -->
      <Right @numChange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  data(){
    return {
      message: 'hello from vue.js',
      userinfo: {name: 'zs',age: 18},
      // 定义数据项来接收子组件传递的数据
      countFromSon: 0
    }
  },
  components: {
    Left,
    Right
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
