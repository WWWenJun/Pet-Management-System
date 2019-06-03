<template>
  <el-form label-width="80px">
    <h3>新增宠主</h3>
    <el-form-item label="头像:" style="height: 200px;">
      <!-- action 中的地址是后端中上传头像的请求接口
    on-success：为上传成功后的方法
    before-upload：上传之前的图片校验方法
      -->
      <el-upload
        class="avatar-uploader"
        action="/petMaster/addImages"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="image" :src="image" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="昵称:">
      <el-input v-model="userName"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名:">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="送货地址:">
      <el-input v-model="address"></el-input>
    </el-form-item>
    <el-form-item label="区域:">
      <el-input v-model="area"></el-input>
    </el-form-item>
    <el-form-item label="积分:">
      <el-input v-model="score"></el-input>
    </el-form-item>
    <el-form-item label="宠物:">
      <el-input v-model="havingPet"></el-input>
    </el-form-item>
    <el-form-item label="会员卡:">
      <el-input v-model="vipCard"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="add">确认新增</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("petMaster");
export default {
  data() {
    //定义初始化名称和地址的值，对应上面的两个输入框
    return {
      userName: "",
      address: "",
      name: "",
      image: "",
      area: "",
      score: "",
      havingPet: "",
      vipCard: ""
    };
  },
  methods: {
    ...mapActions(["addPetMastersAsync"]), //注册异步添加供应商的方法
    //图片上传的方法
    handleAvatarSuccess(res, file) {
      //图片上传并返回图片路径
      this.image = res.data.url;
    },
    //图片上传之前的校验方法，只能上传 jpg 、jpeg、png格式的图片，并且图片大小小于5M
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式或者PNG格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return isJPG && isLt5M;
    },
    add() {
      //点击新增操作

      //如果名称不为空，执行请求方法，并传入参数
      if (this.supplierName != "") {
        //因异步方法只能接收一个参数，所以如果有多个参数，则使用JSON键值对的方式进行封装
        this.addPetMastersAsync({
          userName: this.userName,
          name: this.name,
          image: this.image,
          area: this.area,
          score: this.score,
          address: this.address,
          havingPet: this.havingPet,
          vipCard: this.vipCard
        });
        this.$router.push({ name: "PetMasterList" });
      }
    }
  }
};
</script>
<style>
h3 {
  height: 100px;
  text-align: center;
}

.avatarForm {
  height: 180px;
}

.el-form-item {
  width: 300px;
  height: 80px;
  margin: auto;
}
.el-input {
  height: 30px;
  width: 300px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
