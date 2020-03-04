import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import MyShare from "../components/MyShare/MyShare";
import stocks from "../components/Stocks/Stocks";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/myshare",
    name: "MyShare",
    component: MyShare
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: stocks
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
