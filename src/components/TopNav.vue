<!--顶部导航-->
<template>
    <van-nav-bar
            :title=this.title
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <van-icon name="search" slot="right"></van-icon>
    </van-nav-bar>
</template>

<script>
    export default {
        name: "TopNav",
        methods: {
            onClickLeft() {
                //    跳转返回
            },
            onClickRight() {
                //    点击右边关闭
            }
        },
        props: ['title']
    }
</script>

<style scoped>

</style>
