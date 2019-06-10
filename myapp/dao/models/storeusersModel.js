const mongoose = require("mongoose");

// 创建门店用户数据结构
const storeusersSchema = new mongoose.Schema({
   password:String,
   tel:String,
})
// 创建门店用户数据模型
mongoose.model("storeusersModel", storeusersSchema, "storeusers");