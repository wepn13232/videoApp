import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContentInfo from "@/views/ContentInfo";
import Video from "@/views/Video";
import Message from "@/views/Message";

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
      {
        path: '/info',
        name: 'info',
        component: ContentInfo,
      },
        {
            path: '/video',
            name: 'video',
            component: Video,
        },
        {
            path: '/message',
            name: 'message',
            component: Message,
        },
    ]
})
