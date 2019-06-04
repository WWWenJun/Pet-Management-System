<template>
    <div style="line-height: 50px;margin-left:30px;text-align:left">
      <el-select v-model="type" style="width:120px;" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
      <el-input suffix-icon="el-icon-search" v-model="value" @change="getClerks" style="width:250px;margin-left:20px"></el-input>

        <el-table
      :data="clerksData"
      style="width: 100%;text-align:center"
      @row-click="getRowDatas"
      >
      <el-table-column
        prop="name"
        label="姓名"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="storeId.name"
        label="门店"
        width="120px"
        >
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="level"
        label="水平"
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

        <el-dialog title="修改店员信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="编号" :label-width="formLabelWidth">
           <el-input v-model="form._id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="职位" :label-width="formLabelWidth">
           <el-input v-model="form.position" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
           <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="水平" :label-width="formLabelWidth">
           <el-input v-model="form.level" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="门店" :label-width="formLabelWidth">
              <el-select style="width:200px" v-model="storeId" placeholder="选择门店">
                <el-option  v-for=" item in stores" :key="item._id" :label="item.name" :value="item._id"></el-option>
              </el-select>
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
const { mapState, mapActions, mapMutations} = createNamespacedHelpers("clerks");
export default {
    data(){
        return {
        dialogFormVisible: false,
        index:'',
        row:{},
        userId:'',
        storeId:'',
        stores: [],
        // type:'',
        // value:'',
        options: [
        {
          value: "name",
          label: "姓名"
        },
        {
          value: "position",
          label: "职位"
        },
        {
          value: "phone",
          label: "电话"
        },
        {
          value: "level",
          label: "水平"
        }
      ],
        form: {
            _id:'',
            name: '', 
            position: '',
            phone: '',
            level: '', 
        },
        formLabelWidth: '120px'
      };
    },
  components: {
    Pagination
  },
  computed: {
    ...mapState(["clerksData"]),
    clerksData: {
      get: mapState(["clerksData"]).clerksData,
      set: mapMutations(["setClerksData"]).setClerksData
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
     login() {//获取用户id
      axios({
        method: "post",
        url: "/storeusers/isLogin"
      }).then(msg => {
        console.log(msg.data);
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
    ...mapMutations(["setClerksData"]),
    ...mapActions(["getClerksByPageAsync"]),
    getClerks() {//模糊查询
      axios({
        method: "get",
        url: "/clerks/getSlurClerks",
        params: { type: this.type, value: this.value }
      }).then(res => {
        this.setClerksData(res.data);
      });
    },
    getRowDatas(event) {
        this.form =event;
      console.log(event);
    },
    update(){
        this.dialogFormVisible = false;
        axios({
        method: "post",
        url: "/clerks/changeClerks",
        data: {...this.form,storeId:this.storeId}
      }).then(res => {
        console.log(12);
        this.getClerksByPageAsync();
      });
    },
    open() {
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            console.log(this.form._id,this.getClerksByPageAsync());
            // this.getRowDatas();
          this.delet(this.form._id,this.getClerksByPageAsync());
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
        // this.getRowDatas();
        // this.delet();
      },
    delet:(id,get)=>{
      //删除
      axios({
        method: "post",
        url: "/clerks/removeClerks",
        data: {_id:id}
      }).then(res => {
        // this.show();
        console.log(res);
        get;
      });
    }
  },
  mounted() {
    this.login();
    this.getClerksByPageAsync();
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

