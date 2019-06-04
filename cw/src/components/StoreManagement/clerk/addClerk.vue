<template>
   <div style="line-height: 50px;margin-left:30px;text-align:left">
            <h1>增加店员</h1>
          <span style="margin-left:32px">姓名: </span><el-input style="width:200px;" suffix-icon="el-icon-user-solid" v-model="name" placeholder="请输入姓名"></el-input><br> 
            <span style="margin-left:32px">职级: </span><el-input style="width:200px" v-model="position" suffix-icon="el-icon-s-check" placeholder="请输入职级"></el-input><br>
           <span style="margin-left:0px"> 联系电话: </span><el-input style="width:200px" suffix-icon="el-icon-phone" v-model="phone" placeholder="请输入联系电话"></el-input><br>
           <span style="margin-left:32px">水平: </span> <el-input style="width:200px" suffix-icon="el-icon-star-on" v-model="level" placeholder="请输入服务员水平"></el-input><br>
           <span style="margin-left:32px"></span><el-button type="primary"  plain icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
            </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      position: "",
      phone: "",
      level: "",
    };
  },
  methods: {
    add() {
      //新增
      axios({
        method: "post",
        url: "/clerks/addClerks",
        data: { 
        name: this.name, 
        position: this.position,
        phone: this.phone,
        level: this.level, 
        }
      }).then(res => {
        location.hash = "#/storeSystem/clerksList";
      });
    }
  }
};
</script>

<style>
</style>
