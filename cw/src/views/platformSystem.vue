<template>
  <div>
    <h1>平台系统</h1>
    <div class="navLeft">
      <dl>
        <dt>平台管理</dt>
        <dd>
          <router-link to="/storeSystem/shopDoor">店门</router-link>
        </dd>
        <dd>
          <router-link to="/storeSystem/commodity">商品</router-link>
          <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-shopping-cart-2"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item index="/platformSystem/managersList">平台管理员列表</el-menu-item>
                  <el-menu-item index="/platformSystem/addManagers">增加平台管理员</el-menu-item>
                </el-submenu>
        </dd>
      </dl>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navLeft{
    float: left;
}
.content{
    float: left;
    margin-left: 50px;
}
</style>
