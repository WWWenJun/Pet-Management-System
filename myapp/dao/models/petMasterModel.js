const mongoose = require("mongoose");

// 创建宠主类型
const petMasterSchema = new mongoose.Schema({
    phone: String,
    userName: String,//昵称
    name: String,//真实姓名
    image: String,//头图
    passWord: String,//密码
    address: String, //送货地址
    area: String, //区域
    score: String, //积分
    havingPet:String,
    vipCard:String,
})
mongoose.model("petMasterModel", petMasterSchema, "petMaster");