import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Filters from "@/plugins/Filters";

import "./registerServiceWorker";
import VeeValidate, { Validator } from'vee-validate'
import ja from 'vee-validate/dist/locale/ja'
Vue.config.productionTip = false;
Validator.localize('ja', ja);
Vue.use(VeeValidate, { locale: ja });
Vue.use(Filters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
