import Vue from "vue";
import Router from "vue-router";
import Step01 from "./views/Step01.vue";
import Test01 from "./views/Test01.vue";
import Rensyu03 from "./views/Rensyu03.vue";
import Home from "@/views/Home";
import Contact from "@/views/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/step01",
      name: "Step01",
      component: Step01
    },
    {
      path: "/test01",
      name: "Test01",
      component: Test01
    },
    {
      path: "/rensyu03",
      name: "Rensyu03",
      component: Rensyu03
    },
    {
      path: "/contact",
      name: "Contact",
      component:Contact
    }
  ]
});
