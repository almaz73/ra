import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Example_1 from "./views/Example_1.vue"
import AboutVue from "./views/AboutVue.vue"
import Links from "./views/Links.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/example_1",
      name: "Example_1",
      component: Example_1
    },
    {
      path: "/aboutVue",
      name: "AboutVue",
      component: AboutVue
    },
    {
      path: "/links",
      name: "Links",
      component: Links
    },
  ]
});
