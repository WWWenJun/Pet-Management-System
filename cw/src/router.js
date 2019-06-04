import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import("./views/login.vue"),
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import("./views/reg.vue"),
    },
    // 门店路径
    {
      path: '/storeSystem',
      name: 'StoreSystem',
      component: () => import('./views/storeSystem.vue'),
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: () => import("./components/StoreManagement/goodsManage/goods.vue")
        },
        {
          path: 'goodsOne',
          name: 'goodsOne',
          component: () => import("./components/StoreManagement/goodsManage/goodsOne.vue")
        },
        {
          path: 'goodsSuit',
          name: 'goodsSuit',
          component: () => import("./components/StoreManagement/goodsManage/goodsSuit.vue")
        },
        {
          path: 'goodsMethod',
          name: 'goodsMethod',
          component: () => import("./components/StoreManagement/goodsManage/goodsMethod.vue")
        },
        {
          path: 'goodType',
          name: 'goodType',
          component: () => import("./components/StoreManagement/goodsManage/goodsType.vue")
        },
        {
          path: 'storeList',
          name: 'StoreList',
          component: () => import("./components/StoreManagement/store/storeList.vue")
        },
        {
          path: 'addStore',
          name: 'AddStore',
          component: () => import("./components/StoreManagement/store/addStore.vue")
        }
      ]
    },
    // 平台路径
    {
      path: '/platformSystem',
      name: 'PlatformSystem',
      component: () => import('./views/platformSystem.vue'),
      children: [{
          path: 'managersList',
          name: 'managersList',
          component: () => import("./components/PlatformManagement/managers/platManegersList.vue")
        },
        {
          path: 'storeManagersList',
          name: 'storeManagersList',
          component: () => import("./components/PlatformManagement/managers/storeManagerList.vue")
        }, {
          path: 'store',
          name: 'Store',
          component: () => import("./components/PlatformManagement/store/store.vue")
        },
        {
          path: 'managersList',
          name: 'managersList',
          component: () => import("./components/PlatformManagement/managers/platManegersList.vue")
        },
        {
          path: 'addManagers',
          name: 'addManagers',
          component: () => import("./components/PlatformManagement/managers/addPlatManagers.vue")
        },
        {
          path: 'supplierList',
          name: 'SupplierList',
          component: () => import("./components/PlatformManagement/supplier/supplierList.vue")
        },
        {
          path: 'addSupplier',
          name: 'AddSupplier',
          component: () => import("./components/PlatformManagement/supplier/addSupplier.vue")
        },
        {
          path: 'petMasterList',
          name: 'PetMasterList',
          component: () => import("./components/PlatformManagement/petMaster/petMasterList.vue")
        },
        {
          path: 'addPetMaster',
          name: 'AddPetMaster',
          component: () => import("./components/PlatformManagement/petMaster/addPetMaster.vue")
        },
      ]
    },
  ]
})