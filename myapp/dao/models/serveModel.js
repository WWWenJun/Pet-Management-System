const mongoose = require("mongoose");

// 创建服务类型
const serveSchema = new mongoose.Schema({
    name: String, //m名称
    storeId: {//所属门店
        type: mongoose.Schema.Types.ObjectId,
        ref: "storeModel"
    },
    kind:String,//服务类别
    time:String,//排期
    suit:String,//适用规格
    service:String,//服务规格
    needTime:String,//正常耗时
    server:String,//服务员等级
    price:String,//价格
})
mongoose.model("serveModel", serveSchema, "serve");