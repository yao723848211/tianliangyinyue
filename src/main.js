import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Swipe, SwipeItem,Tab, Tabs  } from 'vant';
import axios from './utils/http'
import VueAxios from "vue-axios";
import { List } from 'vant';
import { PullRefresh } from 'vant';
import { Cell} from 'vant';
import { Icon } from 'vant';
import { Toast } from 'vant';
import store from "./store";
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(PullRefresh);
Vue.use(List);


Vue.use(VueAxios, axios)

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
