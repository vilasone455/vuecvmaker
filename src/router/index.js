import Vue from "vue";
import Router from "vue-router";
import selectcv from "../pages/selectcv.vue";
import formcv from "../pages/formcv.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/selectcv"
    },
    {
      path: "/selectcv",
      name: "selectcv",
      component: selectcv
    },
    {
      path: "/formcv/:cvid",
      name: "formcv",
      component: formcv
    }
  ]
});
