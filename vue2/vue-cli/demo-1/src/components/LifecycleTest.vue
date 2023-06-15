<template>
  <div class="test-container">
    <h3 id="myh3">Test.vue 组件 --- {{ books.length }} 本图书</h3>
    <p id="pppp">message 的值是： {{ message }}</p>
    <button @click="message += '~'">修改 message 的值</button>
  </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {
            message: 'hello vue',
            // 定义books数组，存储的是所有图书的列表，默认为空数组
            books: []
        }
    },
    methods: {
        show(){
            console.log("调用了test组件的show方法");
        },
        // 使用ajax请求图书数据
        initBookList(){
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load',()=>{
                const result = JSON.parse(xhr.responseText);
                this.books = result.data
            })
            xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks')
            xhr.send()
        }
    },
    // 创建阶段的生命周期函数
    beforeCreate() {
        // console.log(this.info);
        // console.log(this.message);
        // this.show()
    },
    // 组件的props，data，methods已创建好，都处于可用状态，但组建的模板尚未生成，可以发起Ajax请求拿数据
    // created 生命周期函数非常重要，我们经常调用methods方法，请求服务器，并且把请求到的方法，转存到data中，供template模板的渲染时使用
    created() {
        console.log(this.info);
        console.log(this.message);
        this.show()
        // this.initBookList()
        // 此处无法操作dom，因为组件的模板结构尚未生成
        // const dom = document.querySelector('#myh3')
        // console.log(dom);
    },
    beforeMount() {
        console.log('beforeMount');
        // 依然无法操作dom结构，此函数没有什么意义，或与created做同等用处
        const dom = document.querySelector('#myh3')
        console.log(dom);
    },
    // 如果想要操作当前组件的dom元素，最早只能在mounted函数中操作
    mounted() {
        console.log(this.$el);
        // const dom = document.querySelector('#myh3')
        // console.log(dom);
    },
    // 当数据改变时会触发，此时只会读取被修改的数据，但页面还没有来得及渲染，
    beforeUpdate() {
        // console.log('beforeUpdate');
        // console.log(this.message);
        // const dom = document.querySelector('#pppp')
        // console.log(dom.innerHTML);
    },
    // 此时数据与UI结构已经完成了同步
    // 当数据变化之后，为了能够操作到最新的dom，必须把函数写到此处
    updated() {
        console.log('beforeUpdate');
        console.log(this.message);
        const dom = document.querySelector('#pppp')
        console.log(dom.innerHTML);
    },
    beforeDestroy() {
        console.log('beforeDestroy');
        console.log(this.message);
    },
    // 销毁当前组件，侦听器，子组件，事件侦听
}
</script>

<style lang="less" scoped>
    .test-container {
        background-color: pink;
        height: 200px;
    }
</style>