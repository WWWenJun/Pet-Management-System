const mongoose = require("mongoose");

// 创建评价类型
const evaluateSchema = new mongoose.Schema({
    order: String, //订单 关联？
    storeId: { //服务门店
        type: mongoose.Schema.Types.ObjectId,
        ref: "storeModel"
    },
    price: String,//订单总金额
    score: String,//评分
    content: String,//评价内容
    picture: String, //上传图片
    nature: String, //评价性质：正常/纠纷/刷单/水贴
    userId: { //评价人：关联宠主
        type: mongoose.Schema.Types.ObjectId,
        ref: "petMasterModel"
    }, 

})
mongoose.model("evaluateModel", evaluateSchema, "evaluate");