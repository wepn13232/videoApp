import Vue from 'vue'
import App from './App.vue'
import router from './router'
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



Vue.use(Row).use(Col);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Image);
Vue.use(Icon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
