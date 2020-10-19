import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    conter: 5,
  },
  mutations: {},
  actions: {
    login() {
      console.log("Login Action Store.");
    },
  },
  modules: {},
});
