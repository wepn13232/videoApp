<!--主页-->
<template>
    <div>
        <!--        导航栏-->
        <top-nav :title="title"></top-nav>
        <!--        具体内容块-->
        <div>
            <div class="box" v-for="(list,index) in 3" :key="index">
                <!--                图片展示-->
                <div>
                    <van-image
                            fit="cover"
                            height="203px"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    ></van-image>
                </div>
                <!--                内容文字-->
                <div>
                    <div class="title">2019中国国际彩盒展</div>
                    <div class="content">
                        <van-row type="flex" class="van-clearfix">
                            <van-col span="19">
                                <div>
                                    会展时间 | 2019.04.08-2019.04.11
                                    <br/>
                                    会展地点 | 上海浦东新国际博览中心
                                </div>
                            </van-col>
                            <van-col span="5" style="margin-right: 0.5rem">
                                <div>
                                    <van-button round type="warning" size="mini" color="#FFC83D"
                                                class="content-right-btn">立即查看
                                    </van-button>
                                </div>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TopNav from "@/components/TopNav";

    export default {
        beforeRouteEnter(to, from, next) {
            document.querySelector('body').setAttribute('style', 'background-color:#EDEDED')
            next()
        },
        beforeRouteLeave(to, from, next) {
            document.querySelector('body').setAttribute('style', 'background-color:#fff')
            next()
        },
        name: 'home',
        components: {TopNav},
        data() {
            return {
                title: '选择展会'
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 92%;
        /*height: 285px;*/
        margin: 1rem auto;
        background-color: #ffffff;
        border-radius: 8px;
    }
    
    .title {
        font-size: 18px;
        color: #333333;
        padding: 10px 10px 5px 10px;
    }
    
    .content {
        font-size: 12px;
        padding: 0 10px 10px 10px;
        line-height: 20px;
        color: #999999;
        position: relative;
    }
    
    .content-right-btn {
        font-size: 11px;
        color: #ffffff;
        position: absolute;
        bottom: 12px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
<style>
    @import "../css/van-imageCss.css";
</style>
