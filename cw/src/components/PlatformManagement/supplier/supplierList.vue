<template>
<div>
  <div class="search">
    <el-select v-model="type" size="medium" @change="handleChange">
    <el-option
      v-for="item in selectOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-input  class="searchText"   v-model="searchText" placeholder="请输入需要搜索的内容" size="medium"></el-input>
  <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
  <el-button type="primary" icon="el-icon-refresh" size="medium" @click="handleRefresh ">刷新</el-button>
  </div>
  
  <el-table  border style="width: 100%" :data="supplierData">
    <el-table-column prop="_id" label="供应商ID" width="240"></el-table-column>
    <el-table-column prop="name" label="供应商名称" width="180"></el-table-column>
    <el-table-column prop="address" label="供应商地址"></el-table-column>
  </el-table>
  <el-pagination
      :page-sizes="[5, 10, 20, 50]"  
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
      @size-change = "handleSizeChange"
      @current-change = "handleCurrentChange"
      @prev-click = "setPrevPage"
      @next-click = "setNextPage"
      >
    </el-pagination>
</div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const {mapState,mapActions,mapMutations} = createNamespacedHelpers("supplier");
export default {
  data() {
      return {
          selectOptions: [{
          value: 'name',
          label: '供应商名称'
        },{
          value: 'address',
          label: '供应商地址'
        }],
        type:'name',
        searchText:''
      }
  },
 computed: {
         ...mapState(['currentPage', 'pageSize', 'totalPages', 'totalCount','supplierData']),
    },
   methods: {
        ...mapMutations(['setNextPage', 'setPrevPage',"setPageSize","setCurrentPage","setType"]),
        ...mapActions(['getSuppliersSearchAsync']),
        //选择多少条每页的方法
        handleSizeChange(val) {
          //调用suppliers.js的mutations中的setPageSize方法，更新pageSize,val就是我们选择的5条/页，或者10条/页的选项值
          this.setPageSize(val);
          //更新状态之后重新获取数据
          this.getSuppliersSearchAsync();
        },
        //选择页码的方法
        handleCurrentChange(val) {
            //调用suppliers.js的mutations中的setCurrentPage方法，更新当前页，val就是我们当前选择的页码
            this.setCurrentPage(val);
            //更新状态之后重新获取数据
            this.getSuppliersSearchAsync();
        },
        //选中搜索下拉框的方法
        handleChange(selVal){
          this.setType(selVal)
        },
        handleSearch(){
          this.getSuppliersSearchAsync(this.searchText);
        },
        handleRefresh(){
          this.getSuppliersSearchAsync();
        }
        
    },
    mounted(){ 
      this.getSuppliersSearchAsync();
    }
};
</script>

<style>
.el-table__header tr,
.el-table__header th {
  padding: 0;
  line-height: 60px;
  text-align: center;
}
.el-pagination{
  text-align: right;
  background-color: #fff;
}
.search{
  line-height: 80px;
  text-align: left;
}
.el-select,.el-input{
  width: 150px;
  display: inline-block;
}
.searchText{
  height: 80px;
  width: 300px;
  display: inline-block;
}
.el-button{
  display: inline-block;
}
</style>


