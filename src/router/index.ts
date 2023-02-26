import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Home from "@/views/Home/index.vue";
import Mine from "@/views/Mine/index.vue";
import Content from "@/views/Content/index.vue";
import Grid from "@/views/Grid/index.vue";
import Login from "@/views/Login/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/content",
    name: "content",
    component: Content,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/grid",
    name: "grid",
    component: Grid,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "login",
      keepAlive: false,
    },
  },
];
export function createSSRRouter(){
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  });
}
