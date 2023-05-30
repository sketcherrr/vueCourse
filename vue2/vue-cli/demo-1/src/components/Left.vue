<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <!-- 私有注册的组件 -->
    <Count :init="3"></Count>
  </div>
</template>

<script>
import Count from './Count.vue'
export default {
  components: {
    Count
  }
}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}


// deep 表示将父组件的样式传递给子组件
// 当使用第三方组件库的时候，如果有修改默认样式的需求，需要用到/deep/
/deep/h5 {
  color: pink;
}
</style>
