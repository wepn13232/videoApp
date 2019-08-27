<!--顶部导航-->
<template>
    <van-sticky>
        <van-nav-bar
                :title=this.title
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <van-icon name="search" slot="right"></van-icon>
        </van-nav-bar>
    </van-sticky>
</template>

<script>
    export default {
        name: "TopNav",
        methods: {
            onClickLeft() {
                this.$router.go(-1)
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
