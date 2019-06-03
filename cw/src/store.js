import Vue from 'vue'
import Vuex from 'vuex'
import supplier from"./components/PlatformManagement/store/supplier.js";
import petMaster from"./components/PlatformManagement/store/petMaster.js";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    supplier,
    petMaster
  }
})
