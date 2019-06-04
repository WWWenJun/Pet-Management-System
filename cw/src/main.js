import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from "./store.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
