import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from "./store.js"
=======
>>>>>>> parent of d341ef2... wj
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
