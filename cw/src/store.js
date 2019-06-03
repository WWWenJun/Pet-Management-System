import Vue from 'vue'
import Vuex from 'vuex'
import Goods from  './store/goods'
import services from "./store/services.js";
import clerks from "./store/clerks";
import managers from "./store/managers"
import supplier from"./components/PlatformManagement/store/supplier.js";
import petMaster from"./components/PlatformManagement/store/petMaster.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

  },
  modules:{
    Goods,
    services,clerks,managers,    supplier,
    petMaster
  }
})


