<template>
   <div style="">
            <h1>增加管理员</h1>
          <span style="margin-left:16px">登录名: </span><el-input style="width:200px;" suffix-icon="el-icon-user-solid" v-model="userName" placeholder="请输入姓名"></el-input><br> 
            <span style="margin-left:32px">密码: </span><el-input style="width:200px" v-model="passWord" suffix-icon="el-icon-lock" show-password placeholder="请输入密码"></el-input><br>
           <span style="margin-left:0px"> 联系电话: </span><el-input style="width:200px" suffix-icon="el-icon-phone" v-model="phone" placeholder="请输入联系电话"></el-input><br>
           <span style="margin-left:32px">邮箱: </span> <el-input style="width:200px" suffix-icon="el-icon-message" v-model="email" placeholder="请输入邮箱"></el-input><br>
           <span style="margin-left:32px">姓名: </span> <el-input style="width:200px" suffix-icon="el-icon-star-on" v-model="name" placeholder="请输入真实姓名"></el-input><br>
           <span style="margin-left:32px">身份: </span> <el-radio-group v-model="role">
                                                          <el-radio :label="'门店管理员'">门店管理员</el-radio>
                                                          <el-radio :label="'平台管理员'">平台管理员</el-radio>
                                                        </el-radio-group><br>
           <span style="margin-left:32px">状态: </span> <el-radio-group v-model="state">
                                                          <el-radio :label="'申请中'">申请中</el-radio>
                                                          <el-radio :label="'可用'">可用</el-radio>
                                                          <el-radio :label="'不可用'">不可用</el-radio>
                                                        </el-radio-group><br>
           <span style="margin-left:32px"></span><el-button type="primary"  plain icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
            </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    userName: '',//登陆名
    passWord:'',
    phone:'',
    email:'',
    name:'',//姓名
    role:'',//角色：平台管理员或门店管理员
    state:'',//状态申请中，可用不可用
    };
  },
  methods: {
    add() {
      console.log(this.role,this.state);
      
      //新增
      axios({
        method: "post",
        url: "/managers/addManagers",
        data: { 
          userName: this.userName,//登陆名
          passWord:this.passWord,
          phone:this.phone,
          email:this.email,
          name:this.name,//姓名
          role:this.role,//角色：平台管理员或门店管理员
          state:this.state,//状态申请中，可用不可用
        }
      }).then(res => {
        location.hash = "#/platformSystem/managersList";
      });
    }
  }
};
</script>

<style>
</style>
