<template>
<div style="width: 100%;height:85%;">
          <Pie  v-bind:pie="goodsSuitData" id="main" style="width: 100%;height:80%;">
          </Pie>
        <el-button  @click="centerDialogVisible = true" type="primary">增加<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-dialog
  title="增加"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input">
  </el-input>
  <!-- <span style="width: 100%;height:40%;">需要注意的是内容是默认不居中的</span> -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary"  @click="check" >确 定</el-button>
  </span>
</el-dialog>
</div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions,mapState}=createNamespacedHelpers('Goods')
import Pie from './pie.vue'
export default {
    computed:{
        ...mapState(['goodsSuitData'])
    },
    watch:{
        GoodsSuitData(){
            // this.getGoodsSuit()            
        }
    },
    components:{
        Pie
    },
  data () {
    return {
            centerDialogVisible: false,
            input:""
    }
  },
  methods: {
      ...mapActions(['addGoodsSuit','getGoodsSuit']),
      check(){
            this.centerDialogVisible=false
            this.addGoodsSuit(this.input)
            this.getGoodsSuit()
      },
  },
    mounted(){
        this.getGoodsSuit();
  },
}
</script>

<style>
.el-main{
    line-height: 80px;
}
</style>
