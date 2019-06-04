<template class="body">
    <div class="login-container" >
        <el-form 
         status-icon
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page" Opacity="0.5">
            <h3 class="title">爱宠邦系统登录</h3>
               <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item label="手机号" prop="usephone">
            <el-input v-model="ruleForm.usephone"/>
          </el-form-item>
        </el-form>
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"/>
          </el-form-item>
        </el-form>
            <el-checkbox 
                class="rememberme"
            >记住密码</el-checkbox>
             <router-link class="reg" to="/reg">还未注册账号？点这里</router-link>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
let axios = require("axios");
export default {
  data() {
       var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
      return {
      ruleForm: {
       usephone: "",
        password: ""
      },
      rules: {
       password : [{ validator: validatePass, trigger: "blur" }],
        usephone: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
    //   password: "",
    //   userphone: ""
  },
  methods: {
    handleSubmit() {
      axios({
        method: "post",
        url: "/storeusers/login",
        data: {
          tel: this.ruleForm.usephone,
          password:this.ruleForm.password
        }
      }).then(res => {
      console.log(res);
      if (res.data.length>0&&this.ruleForm.usephone!="") {
          alert("登录成功");
          this.$router.push({ path: "/storeSystem/"});
          this.$router.push({ path: "/storeSystem"});
        } else {
          alert("输入错误,请重新输入");
        }
      });
       console.log(this.ruleForm.usephone, this.ruleForm.password);
    }
  }
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
}
.login-container {
  width: 100%;
  height: 650px;
  background-image: url("../assets/44d55e8a8f863627a199bc0e1058fd28.jpg");
  background-size: 100% auto;
  border: 1px solid;
 
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 96px 756px;
  width: 350px;
  height: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  /* opacity: 0.7; */
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
.reg {
  float: right;
  font-size: 14px;
  text-decoration: none;
}
</style>