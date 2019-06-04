<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称">
          <template slot-scope="scope">
            <i class="el-icon-s-shop"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="地址">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div class="box">
                <label for>定位: {{ scope.row.local }}</label>
                <label for>
                  执照图片:
                  <img :src="scope.row.img" alt width="100">
                </label>
                <label for>
                  头图:
                  <img :src="scope.row.head" alt width="100">
                </label>
              </div>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.address }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="法人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.person }}</span>
          </template>
        </el-table-column>
        <el-table-column label="联系电话">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="特色">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.item }}</span>
          </template>
        </el-table-column>
        <el-table-column label="vip">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.vip }}</span>
          </template>
        </el-table-column>
        <el-table-column label="佣金比例">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.scale }}</span>
          </template>
        </el-table-column>
        <el-table-column label="门店状态">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteStore(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
let axios = require("axios");
export default {
  data() {
    return {
      tableData: [],
      pageSize:5
    };
  },
  created() {
    this.getStore();
  },
  methods: {
    getStore() {
      axios({
        method: "get",
        url: "/store/getStore"
      }).then(res => {
        this.tableData = res.data;
        console.log(res.data);
      });
    },
    deleteStore(id){
      console.log(id);
      
    }
  }
};
</script>

<style scope>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 40px;
}
.box {
  display: flex;
  align-items: center;
}
</style>
