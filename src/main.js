import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

const opts = {
  icons: {
    iconfont: "mdi"
  }
};
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(opts),
  render: h => h(App),
  router
}).$mount("#app");
