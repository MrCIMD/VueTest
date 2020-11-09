import Vue from "vue";
import Vuex from "vuex";
import { User } from "../interfaces/user.interface";
import { IToken } from "../interfaces/token.interface";
const axios = require("axios");
const api = "http://localhost:3000/api/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {},
    roles: [],
  },
  mutations: {
    setRoles(state, payload) {
      state.roles = payload;
    },
    saveToken(state, payload) {
      localStorage.setItem("auth", JSON.stringify(payload));
    },
    destroyToken(state) {
      localStorage.removeItem("auth");
    },
  },
  actions: {
    async login(
      { commit },
      user: User,
    ): Promise<{ err: boolean; msg: string }> {
      const status = { err: false, msg: "" };

      await axios
        .post(`${api}auth/login`, user)
        .then((resp: any) => {
          console.log(resp.data);
          commit("saveToken", resp.data);
        })
        .catch((err: any) => {
          status.err = true;
          switch (err.response.status) {
            case 401:
              status.msg = "Usuario o la contraseña no son validos.";
              break;
            default:
              status.msg = "Hubo un error, consulte al administrador";
              break;
          }
        });

      return status;
    },
    async register(
      { commit },
      user: User,
    ): Promise<{ err: boolean; msg: string }> {
      const status = { err: false, msg: "" };
      await axios
        .post(`${api}auth/register`, user)
        .then((resp: any) => {
          console.log(resp.data);
          commit("saveToken", resp.data);
        })
        .catch((err: any) => {
          status.err = true;
          console.log(err.response);
          switch (err.response.status) {
            case 401:
              status.msg = "Usuario o la contraseña no son validos.";
              break;
            default:
              status.msg = "Hubo un error, consulte al administrador";
              break;
          }
        });
      return status;
    },
    async getRoles({ commit }) {
      const token: any = JSON.parse(localStorage.getItem("auth"));
      const roles = await axios.get(`${api}roles`, {
        headers: {
          authorization: `Bearer ${token.token}`,
        },
      });
      commit("setRoles", roles.data);
    },
  },
  modules: {},
});
