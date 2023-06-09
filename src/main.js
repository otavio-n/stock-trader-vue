import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

import router from "./router";
import store from "./store/store";

import { priceFormatter } from "./filters/price";

Vue.config.productionTip = false;

Vue.filter("currency", priceFormatter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
