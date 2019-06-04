<template>
    <div style="line-height: 50px;margin-left:30px;text-align:left">
      <el-select  v-model="type" style="width:120px;" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
      <el-input suffix-icon="el-icon-search" v-model="value" @change="getManagers" style="width:250px;margin-left:20px"></el-input>

        <el-table
      :data="managersData"
      style="width: 100%;text-align:center"
      @row-click="getRowDatas"
      >
      <el-table-column
        prop="userName"
        label="登录名"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="passWord"
        label="密码"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="role"
        label="身份"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="120px">
      </el-table-column>
      <el-table-column
      style="display:none"
        prop="_id"
        label="编号"
        width="120px">
      </el-table-column>
      <el-table-column label="操作" width="240" prop="_id" >
           <el-button type="primary"  round icon="el-icon-edit" @click="dialogFormVisible=true">修改</el-button>
            <el-button  type="primary" round icon="el-icon-delete"  @click="open">删除</el-button>
      </el-table-column>
    </el-table>
    <el-main>
        <Pagination />
        </el-main>
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

        <el-dialog title="修改管理员信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="编号" :label-width="formLabelWidth">
           <el-input v-model="form._id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="登录名" :label-width="formLabelWidth">
            <el-input v-model="form.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
           <el-input v-model="form.passWord" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
           <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
           <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
           <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份" :label-width="formLabelWidth">
           <el-input v-model="form.role" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态" :label-width="formLabelWidth">
           <el-input v-model="form.state" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer"  >
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="update">确 定</el-button>
        </div>
        </el-dialog>
    </div>
    
</template>

<script>
import axios from "axios";
import Pagination from "./pagination.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations} = createNamespacedHelpers("managers");
export default {
    data(){
        return {
        dialogFormVisible: false,
        index:'',
        row:{},
        // type:'',
        // value:'',
        options: [
        {
          value: "userName",
          label: "登录名"
        },
        {
          value: "passWord",
          label: "密码"
        },
        {
          value: "phone",
          label: "电话"
        },
        {
          value: "email",
          label: "邮箱"
        },
        {
          value: "name",
          label: "姓名"
        },
        {
          value: "role",
          label: "身份"
        },
        {
          value: "state",
          label: "状态"
        }
      ],
        form: {
            _id:'',
            userName: '',//登陆名
            passWord:'',
            phone:'',
            email:'',
            name:'',//姓名
            role:'',//角色：平台管理员或门店管理员
            state:'',//状态申请中，可用不可用
        },
        formLabelWidth: '120px'
      };
    },
  components: {
    Pagination
  },
  computed: {
    ...mapState(["managersData","type","value"]),
    managersData: {
      get: mapState(["managersData"]).managersData,
      set: mapMutations(["setManagersData"]).setManagersData
    },
    role:{
      get: mapState(["role"]).role,
      set: mapMutations(["setRole"]).setRole
    },
    type:{
      get: mapState(["type"]).type,
      set: mapMutations(["setType"]).setType
    },
    value:{
      get: mapState(["value"]).value,
      set: mapMutations(["setValue"]).setValue
    }
  },
  methods: {
    ...mapMutations(["setManagersData","setRole"]),
    ...mapActions(["getManagersByPageAsync"]),
    getManagers() {//模糊查询
      axios({
        method: "get",
        url: "/managers/getSlurManagers",
        params: { type: this.type, value: this.value }
      }).then(res => {
        this.setManagersData(res.data);
      });
    },
    getRowDatas(event) {
        this.form =event;
    },
    update(){
        this.dialogFormVisible = false;
        axios({
        method: "post",
        url: "/managers/changeManagers",
        data: this.form
      }).then(res => {
        this.getManagersByPageAsync();
      });
    },
    open() {
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delet(this.form._id,this.getManagersByPageAsync());
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    delet:(id,get)=>{
      //删除
      axios({
        method: "post",
        url: "/managers/removeManagers",
        data: {_id:id}
      }).then(res => {
        get;
      });
    }
  },
  mounted() {
    this.setRole('平台管理员')
    this.getManagersByPageAsync();
  }
};
</script>

<style>
.el-main {
  background-color: wheat;
}
.el-table-column {
  text-align: center;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>

