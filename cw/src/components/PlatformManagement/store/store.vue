<template>
  <div>
    <template>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="名称" value="名称"></el-option>
            <el-option label="地址" value="地址"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="selectStore"></el-button>
        </el-input>
      </div>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'black',color:'#fff'}"
        style="width: 100%;"
      >
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
            <el-button size="mini" @click="dialogVisible = true,storeid=scope.row._id">编辑</el-button>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <el-radio-group v-model="radio">
                <el-radio label="审核中">申请中</el-radio>
                <el-radio label="通过申请">通过申请</el-radio>
                <el-radio label="未通过申请">未通过申请</el-radio>
              </el-radio-group>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateStore">确 定</el-button>
              </span>
            </el-dialog>
            <el-button size="mini" type="danger" @click="deleteStore(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5,10, 20, 30, 40]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
let axios = require("axios");
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      tableData: [],
      dialogVisible: false,
      radio: "",
      storeid: "",
      total: 0,
      currentPage: 1,
      pagesize: 5
    };
  },
  created() {
    this.getStoreByPage();
  },
  methods: {
    selectStore() {
      console.log(this.input3);
      console.log(this.select);
      axios({
        method: "get",
        url: "/store/selectStore",
        params:{
          title:this.select,
          value:this.input3
        }
      }).then(res => {
        this.tableData = res.data;
        this.total = res.data.length;
        console.log(res.data);
      });
    },
    deleteStore(id) {
      axios({
        method: "post",
        url: "/store/deleteStore",
        data: {
          _id: id
        }
      }).then(res => {
        this.getStoreByPage();
      });
    },
    updateStore() {
      axios({
        method: "post",
        url: "/store/updateStore",
        data: {
          _id: this.storeid,
          state: this.radio
        }
      }).then(res => {
        console.log(res);
        this.getStoreByPage();
      });
      this.dialogVisible = false;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getStoreByPage() {
      axios({
        method: "get",
        url: "/store/getStoreByPage",
        params: {
          currentPage: this.currentPage,
          pageSize: this.pagesize
        }
      }).then(res => {
        this.tableData = res.data.storesData;
        this.total = res.data.totalCount;
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getStoreByPage();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getStoreByPage();
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
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
