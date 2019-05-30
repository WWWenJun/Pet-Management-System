const mongoose = require("mongoose");

// 创建管理员类型
const managerSchema = new mongoose.Schema({
    userName: String,//登陆名
    passWord:String,
    phone:String,
    email:String,
    name:String,//姓名
    role:String,//角色：平台管理员或门店管理员
    state:String,//状态申请中，可用不可用

})
mongoose.model("managerModel", managerSchema, "manager");