import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/auth/Auth.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/auth/Register.vue"),
      },
      { path: "/auth*", redirect: "login" },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
  },
  { path: "*", redirect: "auth" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
