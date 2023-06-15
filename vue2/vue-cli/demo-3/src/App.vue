<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印 this</button>
    <button @click="resetLeft">重置Left钻进的count值为0</button>
    <hr />

    <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef">
    <button v-else @click="showInput">展示输入框</button>
    <hr>

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
  data() {
    return {
      // 控制输入框按和钮的按需切换
      // 默认值为 false 表示默认展示按钮，隐藏输入框
      inputVisible: false
    }
  },
  methods: {
    showThis() {
      // this 表示当前app组件的实例对象
      console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'red'
    },
    resetLeft() {
      // this.$refs.left.$data.count = 0
      this.$refs.left.resetCount()
    },
    showInput() {
      // 点击按钮展示输入框
      this.inputVisible = true
      // 让展示出来的文本框自动获得焦点
      // this.$nextTick会把cb回调函数推迟到下一个DOM更新周期之后执行，也就是会等DOM渲染完成后，再执行其回调函数，保证回调函数可以操作到最新的DOM元素
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
      })
    },
    showButton() {
      this.inputVisible = false
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
