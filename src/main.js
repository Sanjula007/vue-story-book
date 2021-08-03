import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue,CardPlugin  } from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(CardPlugin )
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
