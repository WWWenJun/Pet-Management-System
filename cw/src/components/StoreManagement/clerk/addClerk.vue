<template>
   <div style="line-height: 50px;margin-left:30px;text-align:left">
            <h1>增加店员</h1>
          <span style="margin-left:32px">姓名: </span><el-input style="width:200px;" suffix-icon="el-icon-user-solid" v-model="name" placeholder="请输入姓名"></el-input><br> 
            <span style="margin-left:32px">职级: </span><el-input style="width:200px" v-model="position" suffix-icon="el-icon-s-check" placeholder="请输入职级"></el-input><br>
           <span style="margin-left:0px"> 联系电话: </span><el-input style="width:200px" suffix-icon="el-icon-phone" v-model="phone" placeholder="请输入联系电话"></el-input><br>
           <span style="margin-left:32px">水平: </span> <el-input style="width:200px" suffix-icon="el-icon-star-on" v-model="level" placeholder="请输入服务员水平"></el-input><br>
           <span style="margin-left:32px">门店: </span><el-select style="width:200px" v-model="storeId" placeholder="选择门店">
        <el-option  v-for=" item in stores" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select><br>
           <span style="margin-left:32px"></span><el-button type="primary"  plain icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
            </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.login();
  },
  data() {
    return {
      name: "",
      position: "",
      phone: "",
      level: "",
      userId: "",
      storeId:'',
      stores: [],
    };
  },
  methods: {
    login() {//获取用户id
      axios({
        method: "post",
        url: "/storeusers/isLogin"
      }).then(msg => {
        console.log(msg);
        this.userId = msg.data;
        this.getStores(msg.data);
      });
    },
    getStores(data) {//获取用户的门店id
      axios({
        method: "get",
        url: "/store/getStore",
        params:{userId:data}
      }).then(msg => {
        console.log(msg);
          this.stores=msg.data;
          console.log(this.stores);
      });
    },
    add() {
      this.getStore(this.storeId)
      //新增
      axios({
        method: "post",
        url: "/clerks/addClerks",
        data: {
          name: this.name,
          position: this.position,
          phone: this.phone,
          level: this.level,
          userId: this.userId,
          storeId:this.storeId,
        }
      }).then(res => {
        console.log(res);

        location.hash = "#/storeSystem/clerksList";
      });
    }
  }
};
</script>

<style>
</style>
