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
          path:'addServies',
          name:'addservies',
          component:()=>import("./components/StoreManagement/service/addService.vue")
        },
        {
          path:'serviesList',
          name:'serviesList',
          component:()=>import("./components/StoreManagement/service/serviesList.vue")
        },
        {
          path:'addClerks',
          name:'addClerks',
          component:()=>import("./components/StoreManagement/clerk/addClerk.vue")
        },
        {
          path:'clerksList',
          name:'clerksList',
          component:()=>import("./components/StoreManagement/clerk/clerkList.vue")
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
          path:'managersList',
          name:'managersList',
          component:()=>import("./components/PlatformManagement/managers/platManegersList.vue")
        },
        {
          path:'storeManagersList',
          name:'storeManagersList',
          component:()=>import("./components/PlatformManagement/managers/storeManagerList.vue")
        },
        {
          path:'addManagers',
          name:'addManagers',
          component:()=>import("./components/PlatformManagement/managers/addPlatManagers.vue")
        },
        {
          path:'commodity',
          name:'Commodity',
          component:()=>import("./components/StoreManagement/commodity/commodity.vue")
        },
      ]
    }
  ]
})
