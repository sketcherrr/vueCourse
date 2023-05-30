<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>{{ count }}</p>
    <button @click="count++"> +1</button>
    <button @click="resetCount">reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    resetCount() {
      this.count = 0
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
