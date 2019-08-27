<!--底部导航栏-->
<template>
    <div>
        <van-tabbar v-model="active"   active-color="#FFC83D">
            <van-tabbar-item icon="home-o"><span>首页</span></van-tabbar-item>
            <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
            <van-tabbar-item icon="search">观展证</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "BottomNav",
        data() {
            return {
                active: 0
        }
        }
    }
</script>

<style scoped>

</style>
