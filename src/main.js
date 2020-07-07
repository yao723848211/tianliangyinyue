import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Swipe, SwipeItem,Tab, Tabs  } from 'vant';
import axios from './utils/http'
import VueAxios from "vue-axios";
import { List } from 'vant';
import { PullRefresh } from 'vant';
import { Cell} from 'vant';

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
  render: h => h(App)
}).$mount('#app')
