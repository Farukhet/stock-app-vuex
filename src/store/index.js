import Vue from "vue";
import Vuex from "vuex";
import stocks from "./module/stocks";
import shares from "./module/Shares";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { stocks, shares }
});
