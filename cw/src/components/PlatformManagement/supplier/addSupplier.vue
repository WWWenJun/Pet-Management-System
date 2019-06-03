<template>
<el-form  label-width="80px">
<h3>新增供应商</h3>
<el-form-item label="名称:">
   <el-input v-model="supplierName" ></el-input>  
</el-form-item>
<el-form-item label="地址:">
   <el-input v-model="address" ></el-input>  
</el-form-item>
<el-form-item>
     <el-button type="primary" @click="add">新增</el-button>
</el-form-item>
</el-form>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("supplier");
export default {
  data(){//定义初始化名称和地址的值，对应上面的两个输入框
    return{
      supplierName:'',
      address:""
    }
  },
  methods: {
     ...mapActions(['addSuppliersAsync']),//注册异步添加供应商的方法

     add(){//点击新增操作

        //如果名称不为空，执行请求方法，并传入参数
        if(this.supplierName !=  ''){
          //因异步方法只能接收一个参数，所以如果有多个参数，则使用JSON键值对的方式进行封装
          this.addSuppliersAsync({
          name:this.supplierName,
          address:this.address
        })
        this.$router.push({ name: 'SupplierList'})
        }
     }
    }
}
</script>
<style>
h3{
  height:100px;
  text-align: center;
}
.el-form-item{
  width:300px;
  height:80px;
  margin:auto
}
.el-input {
  height: 30px;
  width:300px;
}
</style>
