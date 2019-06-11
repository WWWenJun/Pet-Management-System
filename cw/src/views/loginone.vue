<template >
  <!-- <el-main class="aaa"> -->
    <el-form 
      class="regform"
      label-width="0" >

      <h3>爱宠邦平台管理员登录</h3>
      <el-form-item>
        <el-form :model="ruleForm"   status-icon :rules="rules" ref="ruleForm" >
          <el-form-item  label="用户名" prop="userName">
            <el-input  v-model="ruleForm.userName"
            />
          </el-form-item>
        </el-form>
         <el-form class="aa" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item  label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"/>
          </el-form-item>
        </el-form>
         <el-form class="aa" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item  label="姓名" prop="name">
            <el-input v-model="ruleForm.name"/>
          </el-form-item>
        </el-form>
         <el-form class="aa" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item  label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"/>
          </el-form-item>
        </el-form>
 <el-form :model="ruleForm"   class="aa" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item  :model="ruleForm"  label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"/>
          </el-form-item>
        </el-form>
      </el-form-item>
       <el-form-item >
        <el-form-item>
    <el-button class="bb" type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
        <hr>
        <router-link class="login" to="/">返回首页</router-link>
      </el-form-item>
 </el-form>
   
  <!-- </el-main> -->
</template>
<script>
// 引入api接口
let axios = require("axios");
export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请正确填写邮箱"));
      } else {
        if (value !== "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的邮箱(字母开头xxx@xx.com)"));
          }
        }
        callback();
      }
    };
    var checkuserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkuseName !== "") {
          // this.$refs.ruleForm.validateField("checkuserName");
        }
        callback();
      }
    };
    var checkname = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        if (this.ruleForm.checkuseName !== "") {
        //   this.$refs.ruleForm.validateField("checkuserName");
        }
        callback();
      }
    };
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
        //   this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    
    return {
      ruleForm: {
        phone: "",
        password: "",
        name: "",
        userName: "",
        email: "",
        state: "",
        role: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        userName: [{ validator: checkuserName, trigger: "blur" }],
        name: [{ validator: checkname, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
//     isLogin(){
// axios({
//   method:'get',
//   url:'/managers/getManagers',
//   params:{
//      userName: this.ruleForm.userName,
//   }
// }).then(res=>{
//   console.log(res);
//   if(res.data){
//     alert("该用户名已被注册");
//      this.ruleForm.userName='';
  
//   }
// })
//     },
    submitForm() {
      axios({
        method: "post",
        url: "/managers/addManagers",
        data: {
          passWord: this.ruleForm.password,
          userName: this.ruleForm.userName,
          phone: this.ruleForm.phone,
          name: this.ruleForm.name,
          state: this.ruleForm.state,
          role: this.ruleForm.role,
          email: this.ruleForm.email
        }
      }).then(res => {
        console.log(res.config);
        if (this.ruleForm.phone ==true&& this.ruleForm.password==true&&this.ruleForm.name==true&& this.ruleForm.userName==true&& this.ruleForm.email==true) {
          alert("登录成功");
          this.$router.push({ path: "/platformSystem" });
        } else {
          alert("输入错误");
        }
      });
    }
  }
};
</script>

<style>
body {
  
  background-image: url("../assets/f7e17a53f9fdaa564886c90ad190b412.jpg");
  padding: 0;
  margin: 0;
}

.regform {
  margin-left:300px;
  width: 310px;
  height: 630px;
  background: #fff;
  box-shadow: 0 0 10px #b4bccc;
  padding: 10px 30px 0 30px;
  border-radius: 25px;
  border: 1px solid green
}
.aa{
    margin-top: 5px;
}
.bb{
    margin-top: 10px;
    width: 310px;

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
