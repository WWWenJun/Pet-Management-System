<template>
  <div>

    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
<<<<<<< HEAD
        >
        
         
=======

        >
          <el-menu-item index="1">供应商管理</el-menu-item>

        
>>>>>>> a6b30efcc6111f12867d352506b814d315ba1280
          <el-submenu index="1">
            <template slot="title">供应商管理</template>
            <el-menu-item index="/platformSystem/SupplierList">供应商列表</el-menu-item>
            <el-menu-item index="/platformSystem/AddSupplier" >新增供应商</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">宠主管理</template>
            <el-menu-item index="/platformSystem/PetMasterList">宠主列表</el-menu-item>
            <el-menu-item index="/platformSystem/AddPetMaster">新增宠主</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-shopping-cart-2"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item index="/platformSystem/managersList">平台管理员列表</el-menu-item>
                  <el-menu-item index="/platformSystem/addManagers">增加平台管理员</el-menu-item>
                </el-submenu>
          <el-menu-item index="/platformSystem/store">门店管理</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-demo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
