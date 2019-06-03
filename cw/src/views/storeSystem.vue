<template>
  <div>
    <el-container>
      <el-header>门店系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row>
            <el-col :span="12" style="width: 100%; height:500px;">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true"
              >
                
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-school"></i>
                    <span>门店申请</span>
                  </template>
                  <el-menu-item index="/storeSystem/storeList">门店列表</el-menu-item>
                  <el-menu-item index="/storeSystem/addStore">新增门店</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-service"></i>
                    <span>服务管理</span>
                  </template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-shopping-cart-2"></i>
                    <span>商品管理</span>
                  </template>
                  <el-menu-item index="">商品</el-menu-item></el-menu-item>
                  <el-menu-item index="/storeSystem/goodsMethod">品类</el-menu-item>
                  <el-menu-item index="3-3">材质或者制作方法</el-menu-item>
                  <el-menu-item index="3-4">适用规格</el-menu-item>
                  <el-menu-item index="3-5">专属规格</el-menu-item>         
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-document-copy"></i>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item index="4-1">选项1</el-menu-item>
                  <el-menu-item index="4-2">选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>店员管理</span>
                  </template>
                  <el-menu-item index="5-1">选项1</el-menu-item>
                  <el-menu-item index="5-2">选项2</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.aside {
  width: 400px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
<<<<<<< HEAD
=======
  line-height: 160px;
  padding: 0;
>>>>>>> 809795d61e2780600058e4b1e7d8c8350952bbd1
}
</style>
