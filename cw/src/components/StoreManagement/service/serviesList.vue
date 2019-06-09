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
      <el-input suffix-icon="el-icon-search" v-model="value" @change="getService" style="width:250px;margin-left:20px"></el-input>
      <!-- @row-click点击获取行 -->
        <el-table
      :data="serviesData"
      style="width: 100%;text-align:center"
      @row-click="getRowDatas"
      >
      <el-table-column prop="name" label="名称" width="100">
      </el-table-column>
      <el-table-column prop="storeId.name" label="门店" width="100">
      </el-table-column>
      <el-table-column prop="kind" label="服务类别" width="100">
      </el-table-column>
      <el-table-column prop="time" label="排期" width="100">
      </el-table-column>
      <el-table-column prop="suit" label="适用规格" width="100">
      </el-table-column>
      <el-table-column prop="service" label="服务规格" width="100">
      </el-table-column>
      <el-table-column prop="needTime" label="正常耗时" width="100">
      </el-table-column>
      <el-table-column prop="server" label="服务员等级" width="100">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100">
      </el-table-column>
      <el-table-column
      style="display:none" prop="_id" label="编号" width="100">
      </el-table-column>
      <el-table-column label="操作" width="240" prop="_id" >
           <el-button style="width:80px;text-align:center" type="primary"  round icon="el-icon-edit" @click="dialogFormVisible=true">修改</el-button>
            <el-button style="width:80px;text-align:center" type="primary" round icon="el-icon-delete" @selection-change="getRowDatas" @click="open">删除</el-button>
      </el-table-column>
    </el-table>
    <el-main>
        <Pagination />
        </el-main>
        <!-- 修改 -->
        <el-dialog title="修改服务信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="编号" :label-width="formLabelWidth">
           <el-input v-model="form._id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务类别" :label-width="formLabelWidth">
           <el-input v-model="form.kind" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="排期" :label-width="formLabelWidth">
           <el-input v-model="form.time" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="适用规格" :label-width="formLabelWidth">
           <el-input v-model="form.suit" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="服务规格" :label-width="formLabelWidth">
           <el-input v-model="form.service" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="正常耗时" :label-width="formLabelWidth">
           <el-input v-model="form.needTime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务员等级" :label-width="formLabelWidth">
           <el-input v-model="form.server" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="价格" :label-width="formLabelWidth">
           <el-input v-model="form.price" autocomplete="off"></el-input>
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
const { mapState, mapActions,mapMutations } = createNamespacedHelpers("services");
export default {
  data() {
    return {
      // serviesData: this.$store.state.serviesData,
      // type: "",
      // value: "",
       userId:'',
        storeId:'',
        stores: [],
      label: "",
      dialogFormVisible: false,
      index: "",
      row: {},
      options: [
        {
          value: "name",
          label: "名称"
        },
        {
          value: "kind",
          label: "品类"
        },
        {
          value: "time",
          label: "排期"
        },
        {
          value: "suit",
          label: "适用规格"
        },
        {
          value: "service",
          label: "服务规格"
        },
        {
          value: "needTime",
          label: "耗时"
        },
        {
          value: "server",
          label: "服务员等级"
        },
        {
          value: "price",
          label: "价格"
        }
      ],
      form: {
        _id: "",
        name: "", //m名称
        kind: "", //服务类别
        time: "", //排期
        suit: "", //适用规格
        service: "", //服务规格
        needTime: "", //正常耗时
        server: "", //服务员等级
        price: "" //价格
      },
      formLabelWidth: "120px"
    };
  },
  components: {
    Pagination
  },
  watch: {
    serviesData() {
      // this.getServiesByPageAsync();
    }
  },
  computed: {
    ...mapState(["serviesData"]),
    serviesData: {
      get: mapState(["serviesData"]).serviesData,
      set: mapMutations(["setServiesData"]).setServiesData
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
    ...mapMutations(["setServiesData"]),
    ...mapActions(["getServiesByPageAsync"]),
    getService() {//模糊查询
      console.log(this.type, this.value);

      axios({
        method: "get",
        url: "/servies/getSlurServies",
        params: { type: this.type, value: this.value }
      }).then(res => {
        console.log(res.data, this.serviesData);
        this.setServiesData(res.data);
        console.log(this.serviesData);
      });
    },
    getRowDatas(event) {
      this.form = event;
      console.log(event);
    },
    update() {
      this.dialogFormVisible = false;
      axios({
        method: "post",
        url: "/servies/changeServies",
        data: {...this.form,storeId:this.storeId}
      }).then(res => {
        this.getServiesByPageAsync();
      });
    },
    open() {
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.delet(this.form._id, this.getServiesByPageAsync());
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    delet: (id, get) => {
      //删除
      axios({
        method: "post",
        url: "/servies/removeServies",
        data: { _id: id }
      }).then(res => {
        get;
      });
    }
  },
  mounted() {
    this.login();
    this.getServiesByPageAsync();
  }
};
</script>

<style  >


.el-main { 
  background-color: wheat;
}
.el-table-column {
  text-align: center;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  /* line-height: 30px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  /* text-align: center; */
  /* line-height: 200px; */
}
</style>

