import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 门店路径
    {
      path: '/storeSystem',
      name: 'StoreSystem',
      component: () => import('./views/storeSystem.vue'),
      children:[
        {
          path:'storeList',
          name:'StoreList',
          component:()=>import("./components/StoreManagement/store/storeList.vue")
        },
        {
          path:'addStore',
          name:'AddStore',
          component:()=>import("./components/StoreManagement/store/addStore.vue")
        },
      ]
    },
    // 平台路径
    {
      path: '/platformSystem',
      name: 'PlatformSystem',
      component: () => import('./views/platformSystem.vue'),
      children:[
        {
          path:'store',
          name:'Store',
          component:()=>import("./components/PlatformManagement/store/store.vue")
        },
      //   {
      //     path:'commodity',
      //     name:'Commodity',
      //     component:()=>import("./components/StoreManagement/commodity/commodity.vue")
      //   },
      ]
    }
  ]
})
