<!--具体展块内容-->
<template>
    <div>
        <!--        顶部导航栏-->
        <top-nav :title="title"></top-nav>
        <!--        内容板块-->
        <div>
            <!--            图片banner-->
            <div class="image-banner">
                <van-image
                        fit="cover"
                        height="203px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                ></van-image>
            </div>
            <!--   Tab长块-->
            <div class="Tab">
                <van-row class="tab-row" type="flex">
                    <van-col span="8" class="tab-box">
                        <p class="tab-font">
                            展商列表
                        </p>
                    </van-col>
                    <van-col span="8" class="tab-box2">
                        <p class="tab-font">
                            免费参观
                        </p>
                    </van-col>
                    <van-col span="8" class="tab-box">
                        <p class="tab-font">
                            机器人看展
                        </p>
                    </van-col>
                </van-row>
            </div>
            <!--     参展商板块-->
            <div class="content-shop">
                <!--    板块标题-->
                <div class="shop-title">
                    观众最爱参展商
                </div>
                <!-- 展商列表-->
                <div class="shop-lists">
                    <div class="shop" v-for="(lists,index) in 5" :key="index">
                        <van-row type="flex">
                            <van-col>
                                <!-- 展商图片-->
                                <div class="shop-pic">
                                    <van-image
                                            fit="cover"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                    ></van-image>
                                </div>
                            </van-col>
                            <van-col>
                                <!-- 展商内容-->
                                <div class="shop-content-info">
                                    <!--  展商标题（名字）-->
                                    <div class="shop-info-title">
                                        杭州佳鹏电脑科技股份有限公司
                                    </div>
                                    <!--  展商展位-->
                                    <div class="shop-positionNum">
                                        展位：N5D110
                                    </div>
                                    <van-row type="flex">
                                        <van-col>
                                            <!--                                    展商标签-->
                                            <div class="shop-tag">
                                                <van-tag size="mini" class="tag-border-g"
                                                         color="rgba(50, 194, 179, 0.1)"
                                                         text-color="rgba(50, 194, 179, 1)">新展商
                                                </van-tag>
                                                <van-tag size="mini" class="tag-border-r"
                                                         color="rgba(231, 96, 123, 0.1)"
                                                         text-color="rgba(231, 96, 123, 1)">金牌展商
                                                </van-tag>
                                                <van-tag size="mini" class="tag-border-p"
                                                         color="rgba(127, 109, 233, 0.1)"
                                                         text-color="rgba(127, 109, 233, 1)">很积极
                                                </van-tag>
                                            </div>
                                        </van-col>
                                        <!--                                        按钮-->
                                        <van-col class="tag-btn">
                                            <van-icon name="like-o" size="25px"></van-icon>
                                            <van-icon name="chat-o" style="padding-left: 0.3rem" size="25px"></van-icon>
                                        </van-col>
                                    </van-row>
                                    <!-- 查看人数-->
                                    <van-row type="flex">
                                        <van-col id="check-icon">
                                            <van-icon name="like-o" color="#CCCCCC"></van-icon>
                                            <span class="icon-font">12305</span>
                                            <van-icon name="chat-o" style="padding-left: 1.3rem"
                                                      color="#CCCCCC"></van-icon>
                                            <span class="icon-font">12305</span>
                                            <van-icon name="share" style="padding-left: 1.3rem"
                                                      color="#CCCCCC"></van-icon>
                                            <span class="icon-font">12305</span>
                                        </van-col>
                                    </van-row>
                                </div>
                            </van-col>
                        </van-row>
<!--                        分割线-->
                        <div class="border-line"></div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
<!--        底部导航栏-->
        <bottom-nav></bottom-nav>
    </div>
</template>

<script>
    import TopNav from "@/components/TopNav";
    import BottomNav from "@/components/BottomNav";

    export default {
        beforeRouteEnter(to, from, next) {
            document.querySelector('body').setAttribute('style', 'background-color:#EDEDED')
            next()
        },
        beforeRouteLeave(to, from, next) {
            document.querySelector('body').setAttribute('style', 'background-color:#fff')
            next()
        },
        name: "ContentInfo",
        components: {TopNav,BottomNav},
        data() {
            return {
                title: '展会详情'
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/ContenInfo.css";
</style>
<style>
</style>
