import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Vue.config.productionTip = false

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";

// sass
import "./main.scss";

import './registerServiceWorker'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Vue
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
