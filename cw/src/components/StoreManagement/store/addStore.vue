<template>
  <div>
    <div class="box">
      <div class="formInput">
        <div style="margin: 20px;"></div>
        <el-form label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="执照号码">
            <el-input v-model="num"></el-input>
          </el-form-item>
          <el-form-item label="营业地址">
            <el-input v-model="address"></el-input>
          </el-form-item>
          <el-form-item label="法人">
            <el-input v-model="person"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="phone"></el-input>
          </el-form-item>
          <el-form-item label="特色">
            <el-input v-model="item"></el-input>
          </el-form-item>
          <el-form-item label="佣金比例">
            <el-input v-model="scale"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="upImg">
        <el-form>
          <el-form-item label="执照图片">
            <el-upload
              class="avatar-uploader"
              action="/store/addImages"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="头图">
            <el-upload
              class="avatar-uploader"
              action="/store/addImages"
              :show-file-list="false"
              :on-success="handleAvatarSuccessHead"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrlHead" :src="imageUrlHead" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="btn">
      <el-button type="success" round @click="addBtn">确认新增</el-button>
    </div>
    <!-- <div id="container"></div>
    <div id="myPageTop">
      <table>
        <tr>
          <td>
            <label>请输入关键字：</label>
          </td>
        </tr>
        <tr>
          <td>
            <input id="tipinput">
          </td>
        </tr>
      </table>
    </div> -->
  </div>
</template>
<script>
let axios = require("axios");
export default {
  data() {
    return {
      name: "",
      num: "", //执照号码
      img: "", //执照图片
      address: "", //营业地址
      local: "", //定位
      person: "", //法人
      phone: "", //联系电话
      head: "", //头图
      item: "", //特色
      scale: "", //佣金比例
      state: "", //门店状态
      imageUrl: "",
      imageUrlHead: "",
      userId: ""
    };
  },
  created() {
    this.login();
    // this.map();
  },
  mounted() {
    // this.map();
  },
  methods: {
    addBtn() {
      axios({
        method: "post",
        url: "/store/addStore",
        data: {
          name: this.name,
          num: this.num, //执照号码
          img: this.img, //执照图片
          address: this.address, //营业地址
          local: this.local, //定位
          person: this.person, //法人
          phone: this.phone, //联系电话
          head: this.head, //头图
          item: this.item, //特色
          scale: this.scale, //佣金比例
          userId: this.userId
        }
      }).then(res => {
        if (res.data) {
          alert("新增成功");
          this.$router.push({ path: "/storeSystem/storeList" });
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.img = res.data.url;
    },
    handleAvatarSuccessHead(res, file) {
      this.imageUrlHead = URL.createObjectURL(file.raw);
      this.head = res.data.url;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    login() {
      axios({
        method: "post",
        url: "/storeusers/isLogin"
      }).then(msg => {
        this.userId = msg.data;
        console.log(msg.data);
      });
    },
    map() {
      window.onLoad = function() {
        var map = new AMap.Map("container");
      };
      var url =
        "https://webapi.amap.com/maps?v=1.4.14&key=80ec123eea4dce943e1f78d45cf14734&callback=onLoad";
      var jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.src = url;
      document.head.appendChild(jsapi);
      // //地图加载
      // var map = new AMap.Map("container", {
      //   resizeEnable: true
      // });
      // //输入提示
      // var autoOptions = {
      //   input: "tipinput"
      // };
      // var auto = new AMap.Autocomplete(autoOptions);
      // var placeSearch = new AMap.PlaceSearch({
      //   map: map
      // }); //构造地点查询类
      // AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
      // function select(e) {
      //   placeSearch.setCity(e.poi.adcode);
      //   placeSearch.search(e.poi.name); //关键字查询查询
      // }
    },
    selectmap() {
      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        // var placeSearch = new AMap.PlaceSearch({
        //     pageSize: 5, // 单页显示结果条数
        //     pageIndex: 1, // 页码
        //     city: "010", // 兴趣点城市
        //     citylimit: true,  //是否强制限制在设置的城市内搜索
        //     map: map, // 展现结果的地图实例
        //     panel: "panel", // 结果列表将在此容器中进行展示。
        //     autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        // });
        //关键字查询
        placeSearch.search("北京");
      });
    }
  }
};
</script>

<style scope>
.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
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
#container {
  width: 300px;
  height: 180px;
}
</style>
