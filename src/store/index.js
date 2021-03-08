import Vue from 'vue'
import Vuex from 'vuex'

import api from "@/services/api";
import { server } from "@/services/constants";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    username: ""
  },

  getters:{
    isLogin(state) {
      return state.isLogged;
    },
    username(state) {
      return  state.username;
    },
    password(state){
    return state
    }
  },
  //update state
  mutations: {
    SET_LOGGED_IN(state){
      state.isLogged = true
    },
    SET_LOGGED_OUT(state){
      state.isLogged = false

    },
    SET_USERNAME(state,value){
      state.username = value
    },
  },
  //method commit คล้ายๆ angular 
  actions: {
     doLogin({ commit, dispatch }, {username,password}) {
       //await api.login({ username, password });
      let result = api.login({ username, password });
      if (result == true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit}) {
      api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    },
      // localStorage คล้าย angular 
      restoreLogin({ commit }) {
        if (api.isLoggedIn() == true) {
          let username = localStorage.getItem(server.USERNAME);
          commit("SET_LOGGED_IN");
          commit("SET_USERNAME", username);
        }
      },
        
  },
  modules: {
  }
})
