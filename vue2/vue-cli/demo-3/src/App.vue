<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印 this</button>
    <button @click="resetLeft">重置Left钻进的count值为0</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left ref="left"></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'
export default {
  methods: {
    showThis() {
      // this 表示当前app组件的实例对象
      console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'red'
    },
    resetLeft() {
      // console.log(this.$refs.left.$data.count);
      // this.$refs.left.$data.count = 0
      this.$refs.left.resetCount()
    }
  },
  components: {
    Left,
    Right
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
