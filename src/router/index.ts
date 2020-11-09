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
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/dashboard/Home.vue"),
      },
      {
        path: "users",
        name: "UserIndex",
        component: () => import("../views/dashboard/users/UserIndex.vue"),
      },
      {
        path: "roles",
        name: "RoleIndex",
        component: () => import("../views/dashboard/roles/RoleIndex.vue"),
      },
      { path: "/dashboard*", redirect: "home" },
    ],
  },
  { path: "*", redirect: "auth" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
