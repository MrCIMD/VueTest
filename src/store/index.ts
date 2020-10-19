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
  },
  mutations: {
    saveToken(state, payload: IToken) {
      state.auth = payload;
    },
    destroyToken(state) {
      state.auth = {};
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

        .then((resp: IToken) => {
          console.log(resp);
          commit("saveToken", resp);
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
        .then((resp: IToken) => {
          console.log(resp);
          commit("saveToken", resp);
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
  },
  modules: {},
});
