import Vue from 'vue'
import Vuex from 'vuex'
import services from "./stores/services.js";
import clerks from "./stores/clerks";
import managers from "./stores/managers"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    services,clerks,managers
  }
})