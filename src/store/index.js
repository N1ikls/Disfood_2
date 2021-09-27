import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: "",
    trade: [],
  },
  mutations: {
    SET_TRADE_TO_STATE: (state, trade) => {
      state.trade = trade;
    },

    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    },
  },
  actions: {
    GET_TRADE_FROM_API({ commit }) {
      return axios(
        "https://raw.githubusercontent.com/N1ikls/Disfood/master/public/orders.json",
        {
          method: "GET",
        }
      ).then((trade) => {
        commit("SET_TRADE_TO_STATE", trade.data);
      });
    },
    LOCAL({ commit }, local) {
      //
      commit("PUSHLOCAL", local);
    },
    DELETE({ commit }) {
      commit("DEL");
    },

    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH_VALUE", value);
    },
  },

  modules: {},

  getters: {
    local(state) {
      return state.local;
    },

    trade(state) {
      return state.trade;
    },

    searchValue(state) {
      return state.searchValue;
    },
  },
});
