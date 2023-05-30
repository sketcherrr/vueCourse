<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <MyCount :init="2"></MyCount>
    <h3>测试</h3>
    <button @click="flag = !flag">Toggle Flag</button>
    <Test info="你好" v-if="flag"></Test>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 以标签形式使用已注册好的组件 -->
      <Left></Left>
      <Right></Right>
    </div> 
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Test from '@/components/LifecycleTest.vue'
export default {
  // data需要定义到components之前，否则不会触发beforeDestroy函数，原因未知
  data() {
    return {
      flag: true
    }
  },
  components: {
    Left,
    Right,
    Test
  },
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
