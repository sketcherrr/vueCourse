<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是: {{ msg }}</p>
    <p>user 的值是： {{ user }}</p>
    <button @click="sendMsg">send to right</button>
    <button @click="withdrawMsg">withdraw from rignt</button>
  </div>
</template>

<script>
// 使用evebtbus进行兄弟组件间的数据传递
import bus from './EventBus.js'
export default {
  props: ['msg','user'],
  data() {
    return {
      // 数据名不可与props中的名称相同
      msg1: `两个黄鹂鸣翠柳，一行白鹭上青天.窗含西岭千秋雪，门泊东吴万里船。`
    }
  },
  methods: {
    sendMsg() {
      bus.$emit('share',this.msg1)
    },
    withdrawMsg() {
      bus.$emit('withdraw','')
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
