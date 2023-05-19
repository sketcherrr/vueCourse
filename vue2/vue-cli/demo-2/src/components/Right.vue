<template>
  <div class="right-container">
    <h3>Right 组件 --- {{ count }}</h3>
    <button @click="add">+1</button>
    <p>{{ msgFromLeft }}</p>
  </div>
</template>

<script>
import bus from './EventBus.js'
export default {
  data() {
    return {
      // 子组件自己的数据，将来希望把值传递给父组件
      count: 0,
      msgFromLeft: ''
    }
  },
  methods: {
    add(){
      this.count+=1
      // 修改数据时，通过$emit()触发自定义事件
      this.$emit('numChange',this.count)
    }
  },
  created() {
    // 箭头函数只有一个参数时，可省略括号
    bus.$on('share',val => {
      this.msgFromLeft = val
    }),
    bus.$on('withdraw',val=>{
      this.msgFromLeft = val
    })
  },
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
