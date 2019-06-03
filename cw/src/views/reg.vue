<template class="body">
  <el-main class="aaa">
    <el-form 
      class="regform"
      label-width="0" >

      <h3>爱宠邦用户注册</h3>
      <el-form-item>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item label="手机号" prop="phone">
            <el-input v-model.number="ruleForm.phone"/>
          </el-form-item>
        </el-form>
      </el-form-item>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
  <el-form-item label="密码" prop="pw">
    <el-input type="password" v-model="ruleForm.pw" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
       <el-form-item >
        <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>
        <hr>
        <router-link class="login" to="/login">已有账号，点击登录</router-link>
      </el-form-item>
 </el-form>
    </el-form>
  </el-main>
</template>
<script>
// 引入api接口
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pw) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        pw: ""
      },
      rules: {
        pw: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    // ...
    submitForm() {
      axios({
        method: "post",
        url: "/storeusers/addUsers",
        data: {
          password: this.ruleForm.pw,
          tel: this.ruleForm.phone
        }
      }).then(res => {
        if (this.ruleForm.phone && this.ruleForm.phone) {
          alert("注册成功");
          this.$router.push({ path: "/login" });
        } else {
          alert("输入错误");
        }

      });
      console.log(this.ruleForm.phone, this.ruleForm.pw);
    }
  }
};
</script>

<style scoped>
.body{
  width: 100%;
  height: 100%;
}
.aaa{
   background-image: url("../assets/4e75bd22dd54c966f87c6a746682e34a.jpg");
 width: 100%;
  height:650px;
}
.regform {
  margin: 20px auto;
  width: 310px;
  height: 510px;
  background: #fff;
  box-shadow: 0 0 10px #b4bccc;
  padding: 30px 30px 0 30px;
  border-radius: 25px;
}

.to {
  color: #fa5555;
  cursor: pointer;
}
.login {
  float: right;
  text-decoration: none;
}
</style>
