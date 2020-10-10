import Vue from "vue";
import Vuex from "vuex";
import grid from "./grid";
import data from "./data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    grid,
    data,
  },
});
