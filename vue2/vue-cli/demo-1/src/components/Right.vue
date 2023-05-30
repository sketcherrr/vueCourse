<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <!-- 在main.js中注册的全局组件 -->
    <!-- 加上 v-bind 的冒号后，绑定值变为了数字9，否则是字符串9 -->
    <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
