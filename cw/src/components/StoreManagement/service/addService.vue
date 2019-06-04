<template>
   <div style="line-height: 50px;margin-left:30px;text-align:left">
            <h1>增加服务</h1>
          <span style="margin-left:32px">名称: </span><el-input style="width:200px;" v-model="name" placeholder="请输入名称"></el-input><br> 
          <span style="margin-left:32px">品类: </span> <el-input style="width:200px" v-model="kind" placeholder="请输入品类"></el-input>
            <div class="block">
                <span style="margin-left:32px">排期: </span>
                <el-date-picker
                style="width:200px"
                  v-model="time"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
             </div>
            <!-- 排期: <el-input style="width:200px" suffix-icon="el-icon-date" v-model="time" placeholder="请输入时间"></el-input> -->
            适用规格: <el-input style="width:200px" v-model="suit" placeholder="请输入适用规格"></el-input><br>
            服务规格: <el-input style="width:200px" v-model="service" placeholder="请输入服务规格"></el-input><br>
            <span style="margin-left:32px">耗时: </span><el-input style="width:200px" v-model="needTime" placeholder="请输入所耗时间"></el-input><br>
            <span style="margin-left:-16px">服务员等级: </span><el-input style="width:200px" v-model="server" placeholder="请输入服务员等级"></el-input><br>
            <span style="margin-left:32px">价格: </span><el-input style="width:200px" v-model="price" placeholder="请输入价格"></el-input><br>
            <!-- <input type="button" value="增加学生" @click="add"> -->
            <span style="margin-left:32px"></span><el-button type="primary" plain icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
            </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      kind: "",
      time: "",
      suit: "",
      service: "",
      needTime: "",
      server: "",
      price: ""
    };
  },
  methods: {
    add() {
      //新增
      axios({
        method: "post",
        url: "/servies/addServies",
        data: {
          name: this.name,
          kind: this.kind,
          time: this.time,
          suit: this.suit,
          service: this.service,
          needTime: this.needTime,
          server: this.server,
          price: this.price
        }
      }).then(res => {
        location.hash = "#/storeSystem/serviesList";
      });
    }
  }
};
</script>

<style>
.add{
  line-height: 50px;
  text-align: left
}
</style>
