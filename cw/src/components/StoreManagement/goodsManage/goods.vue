<template>
<div>
  <template class="headTop">
    <el-button type="primary" @click="dialogFormVisible = true" plain icon="el-icon-edit">增加商品</el-button>
    <template>
          <el-select  v-model="type" style="width:120px;" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
            <el-input suffix-icon="el-icon-search" v-model="value" @change="getManagers" style="width:250px;margin-left:20px"></el-input>
    </template>
  </template>
            
<el-dialog title="新增商品" :visible.sync="dialogFormVisible">
  <el-form >
    <el-form-item label="商品名称" >
      <el-input  v-model="newGoods.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="商品种类" >
      <el-select v-model="newGoods.typeId"  placeholder="输入商品种类">
        <el-option  v-for=" item in goodsTypeData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="制作方法" >
      <el-select  v-model="newGoods.methodId" placeholder="输入制作方法">
        <el-option  v-for=" item in goodsMethodData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
            <el-form-item label="适用规格" >
      <el-select  v-model="newGoods.suitId"  placeholder="输入适用规格">
        <el-option  v-for=" item in goodsSuitData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
                <el-form-item label="专属规格" >
      <el-select v-model="newGoods.oneId"  placeholder="输入专属规格">
        <el-option  v-for=" item in goodsOneData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="包装规格" >
      <el-input v-model="newGoods.pack"  autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="口味" >
      <el-input v-model="newGoods.flavor" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="特殊功用" >
      <el-input v-model="newGoods.special" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="产地" >
      <el-input v-model="newGoods.place" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="日期" >
      <el-input v-model="newGoods.data" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="保质期" >
      <el-input v-model="newGoods.quality" autocomplete="off"></el-input>
    </el-form-item>
                <el-form-item label="供应商" >
      <el-select  v-model="newGoods.supplierId" placeholder="选择供应商">
        <el-option  v-for=" item in supplier" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
            <el-form-item label="商品特色" >
      <el-input v-model="newGoods.item"  autocomplete="off"></el-input>
    </el-form-item>
            <el-form-item label="商品价格" >
      <el-input  v-model="newGoods.price" autocomplete="off"></el-input>
    </el-form-item>
            <el-form-item label="商品图片" >
              <el-upload
  class="avatar-uploader"
  action="goods/addImages"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="newGoods.img" :src="newGoods.img" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
    </el-form-item>
                    <el-form-item label="所属门店" >
      <el-select  v-model="newGoods.storeId" placeholder="请选择所属门店">
        <el-option  v-for=" item in goodsSuitData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addGoods">确 定</el-button>
  </div>
</el-dialog>
<el-dialog title="修改商品" :visible.sync="changegood">
  <el-form >
    <el-form-item label="商品名称" >
      <el-input  v-model="changeGoods.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="商品种类" >
      <el-select v-model="changeGoods.typeId.name"  placeholder="输入商品种类">
        <el-option  v-for=" item in goodsTypeData" :key="item._id" :label="item.name" :value="item.name"></el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="制作方法" >
      <el-select  v-model="changeGoods.methodId.name" placeholder="输入制作方法">
        <el-option  v-for=" item in goodsMethodData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
            <el-form-item label="适用规格" >
      <el-select  v-model="changeGoods.suitId.name"  placeholder="输入适用规格">
        <el-option  v-for=" item in goodsSuitData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
                <el-form-item label="专属规格" >
      <el-select v-model="changeGoods.oneId.name"  placeholder="输入专属规格">
        <el-option  v-for=" item in goodsOneData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="包装规格" >
      <el-input v-model="changeGoods.pack"  autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="口味" >
      <el-input v-model="changeGoods.flavor" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="特殊功用" >
      <el-input v-model="changeGoods.special" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="产地" >
      <el-input v-model="changeGoods.place" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="日期" >
      <el-input v-model="changeGoods.data" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="保质期" >
      <el-input v-model="changeGoods.quality" autocomplete="off"></el-input>
    </el-form-item>
                <el-form-item label="供应商" >
      <el-select  v-model="changeGoods.supplierId" placeholder="选择供应商">
        <el-option  v-for=" item in supplier" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
            <el-form-item label="商品特色" >
      <el-input v-model="changeGoods.item"  autocomplete="off"></el-input>
    </el-form-item>
            <el-form-item label="商品价格" >
      <el-input  v-model="changeGoods.price" autocomplete="off"></el-input>
    </el-form-item>
            <el-form-item label="商品图片" >
              <el-upload
  class="avatar-uploader"
  action="goods/addImages"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="changeGoods.img" :src="changeGoods.img" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
    </el-form-item>
                    <el-form-item label="所属门店" >
      <el-select  v-model="changeGoods.storeId" placeholder="请选择所属门店">
        <el-option  v-for=" item in goodsSuitData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="changegood = false">取 消</el-button>
    <el-button type="primary" @click="changeGood">确 定</el-button>
  </div>
</el-dialog>
  <el-table
    :data="goodsData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="商品种类">
            <span>{{ props.row.typeId.name }}</span>
          </el-form-item>
          <el-form-item label="制作方法">
            <span>{{ props.row.methodId.name }}</span>
          </el-form-item>
          <el-form-item label="适用规格">
            <span>{{ props.row.suitId.name }}</span>
          </el-form-item>
          <el-form-item label="专属规格">
            <span>{{ props.row.oneId.name }}</span>
          </el-form-item>
          <el-form-item label="包装规格">
            <span>{{ props.row.pack }}</span>
          </el-form-item>
          <el-form-item label="口味">
            <span>{{ props.row.flavor }}</span>
          </el-form-item>
                    <el-form-item label="特殊功能">
            <span>{{ props.row.special }}</span>
          </el-form-item>
                    <el-form-item label="产地">
            <span>{{ props.row.place }}</span>
          </el-form-item>
                    <el-form-item label="日期">
            <span>{{ props.row.data }}</span>
          </el-form-item>
                    <el-form-item label="保质期">
            <span>{{ props.row.quality }}</span>
          </el-form-item>
                    <el-form-item label="供应商">
            <span>{{ props.row.supplierId.name }}</span>
          </el-form-item>
                    <el-form-item label="商品特色">
            <span>{{ props.row.item }}</span>
          </el-form-item>
                    <el-form-item label="商品价格">
            <span>{{ props.row.price }}</span>
          </el-form-item>
                    <el-form-item label="商品图片">
                      <img  id="goodimg" style="height:50px,width:50px" :src="props.row.img" alt="">
          </el-form-item>
                    <el-form-item label="所属门店">
            <span>{{ props.row.storeId }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="_id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="typeId.name">
    </el-table-column>
        <el-table-column
      label="操作"
>
      <template slot-scope="props">
      <el-button type="primary" @click="change(props.row)" icon="el-icon-edit" circle></el-button>
      <el-button type="danger"  @click="deletes(props.row._id)" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="block">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage-0"
      :page-sizes="[pageSize-0, 1, 15, 20]"
      :page-size="pageSize-0"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount-0">
    </el-pagination>
  </div>
</div>
  
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions,mapState,mapMutations}=createNamespacedHelpers('Goods')
  export default {
    created(){
      
      },
        mounted(){
        this.changeUserId();
        this.setSuppliers()
        this.getGoodsOne();
        this.getGoodsMethod();
        this.getGoodsType();
        this.getGoodsSuit();
  },
  
        computed:{
        ...mapState(['goodsOneData','goodsMethodData','supplier',
        'goodsSuitData','goodsTypeData','goodsData','currentPage',
        'pageSize','totalPages','totalCount','userId','type','value']),
                currentPage: {
            get: mapState(['currentPage']).currentPage,
            set: mapMutations(['setCurrentPage']).setCurrentPage
        },
        pageSize: {
            get: mapState(['pageSize']).pageSize,
            set: mapMutations(['setPageSize']).setPageSize
        },
        type: {
            get: mapState(['type']).type,
            set: mapMutations(['setType']).setType
        },
                value: {
            get: mapState(['value']).value,
            set: mapMutations(['setValue']).setValue
        },

    },
      methods:{
              ...mapActions(['getGoodsOne','changeUserId','setSuppliers','getManager','getGoodsMethod','getGoodsType','getGoodsSuit','addGood','changeOneGood',"getGoods",'deleteGoods']),
  handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(URL.createObjectURL(file.raw));
        
      },
      getManagers(){
        this.getManager()
      },
      changeGood(){
        this.changegood=false
        this.changeOneGood(this.changeGoods)      
      this.changeUserId();
          
      },
      deletes(data){
        this.deleteGoods(data)
      this.changeUserId();
        
        // this.getGoods(this.userId)               
      },
      change(data){
        this.changegood=true
        this.changeGoods={...data,userId:this.userId}
      },
      addGoods(){
        this.dialogFormVisible=false,
        this.newGoods.userId=this.userId
       this.addGood(this.newGoods)
      this.changeUserId();
       
        // this.getGoods(this.userId)       
      },
      handleAvatarSuccess(res,file){
        this.newGoods.img=res.data.url
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
           handleSizeChange(val) {
             this.pageSize=val
        this.getGoods()
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage=val
        this.getGoods()
        console.log(`每页 ${val} 条`);
        
      }
      },
    data() {
      return {
        options: [
        {
          value: "name",
          label: "商品名称"
        },
        {
          value: "typeId",
          label: "商品类型"
        },
        {
          value: "methodId",
          label: "制造方法"
        },
        {
          value: "suitId",
          label: "适合规格"
        },
        {
          value: "oneId",
          label: "专用规格"
        },
        {
          value: "data",
          label: "生产日期"
        }
      ],
        newGoods:{
            name:'',
            typeId:'',
            methodId:'',
            suitId:'',
            oneId:'',
            pack:'',
            flavor:'',
            special:'',
            place:'',
            data:'',
            quality:'',
            supplierId:'',
            item:'',
            price:'',
            img:'',
            storeId:'',
            userId:''
      },
        dialogFormVisible:false,
        changeGoods:{
          name:'',
            typeId:'',
            methodId:'',
            suitId:'',
            oneId:'',
            pack:'',
            flavor:'',
            special:'',
            place:'',
            data:'',
            quality:'',
            supplierId:'',
            item:'',
            price:'',
            img:'',
            storeId:''
        },
        changegood:false
      }
    }
  }
</script>
<style scope>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .el-main{
      line-height: normal;
  }
  .el-form-item__content{
      /* line-height: 80px; */
      height: 80px;      
  }
  .el-form-item{
      display: block;
      height: 80px;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #goodimg{
    width: 100px;
    height: 100px;
  }
  .headTop{
    justify-content: space-between
  }
</style>
