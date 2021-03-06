import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import { NavBar } from 'vant';
import 'vant/lib/nav-bar/style';
import {Icon} from "vant";
import 'vant/lib/icon/style';
import { Row, Col } from 'vant';
import 'vant/lib/row/style';
import 'vant/lib/col/style';
import { Image } from 'vant';
import 'vant/lib/image/style';
import { Button } from 'vant';
import 'vant/lib/button/style';
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/tabbar/style';
import 'vant/lib/tabbar-item/style';
import { Sticky } from 'vant';
import 'vant/lib/sticky/style';
import { Tag } from 'vant';
import 'vant/lib/tag/style';
import router from './router'
import AgoraRTM from "agora-rtm-sdk";
import {Field} from "vant";
import 'vant/lib/field/style';
import { Cell, CellGroup } from 'vant';
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';



Vue.use(Row).use(Col);
Vue.use(NavBar);
Vue.use(Tag);
Vue.use(Sticky);
Vue.use(Cell).use(CellGroup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Field);
Vue.use(AgoraRTM);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
