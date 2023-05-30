<template>
  <div>
    <h5>Count 组件</h5>
    <p>Count 的值是：{{ count }}</p>
    <button @click="Add">+1</button>
  </div>
</template>

<script>
export default  {
    data(){
        return {
            // 将自定义属性的值赋给定义好的数据，再进行编辑
            count: this.init
        }
    },
    methods: {
        Add(){
            this.count++
        }
    },
    // porps 是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
    // 自定义属性的名字，是封装者自定义的（合法即可）
    // 组件中封装的自定义属性是只读的，不能直接修改props的值，否则终端会报错
    // 数组形式的props不可以指定默认值
    // props: ['init'],
    props: {
        // 自定义属性 A ：{/*配置选项*/},
        // 自定义属性 B ：{/*配置选项*/},
        // 自定义属性 C ：{/*配置选项*/},
        init: {
            // 如果外界使用count组件时没有传递参数，则默认值生效
            default: 0,

            // type属性代表需要传入数据的类型
            type: Number,

            // reqire表示此属性为必填项
            required: true
        },
    },
}
</script>

<style lang="less">

</style>