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
          path:'shopDoor',
          name:'ShopDoor',
          component:()=>import("./components/StoreManagement/shopDoor/shopDoor.vue")
        },
        {
          path:'commodity',
          name:'Commodity',
          component:()=>import("./components/StoreManagement/commodity/commodity.vue")
        },
        {
          path:'goods',
          name:'goods',
          component:()=>import("./components/StoreManagement/goodsManage/goods.vue")
        },
        {
          path:'goodsMethod',
          name:'goodsMethod',
          component:()=>import("./components/StoreManagement/goodsManage/goodsMethod.vue")
        },
        {
          path:'goodsOne',
          name:'goodsOne',
          component:()=>import("./components/StoreManagement/goodsManage/goodsOne.vue")
        },
        {
          path:'goodsSuit',
          name:'goodsSuit',
          component:()=>import("./components/StoreManagement/goodsManage/goodsSuit.vue")
        },
        {
          path:'goodType',
          name:'goodType',
          component:()=>import("./components/StoreManagement/goodsManage/goodType.vue")
        },{
          path:'store',
          name:'Store',
          component:()=>import("./components/StoreManagement/store/store.vue")
        }
      ]
    },
    // 平台路径
    {
      path: '/platformSystem',
      name: 'PlatformSystem',
      component: () => import('./views/platformSystem.vue'),
      // children:[
      //   {
      //     path:'shopDoor',
      //     name:'ShopDoor',
      //     component:()=>import("./components/StoreManagement/shopDoor/shopDoor.vue")
      //   },
      //   {
      //     path:'commodity',
      //     name:'Commodity',
      //     component:()=>import("./components/StoreManagement/commodity/commodity.vue")
      //   },
      // ]
    }
  ]
})
