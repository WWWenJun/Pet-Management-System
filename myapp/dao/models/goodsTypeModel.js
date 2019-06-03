const mongoose = require("mongoose");

// 创建商品类型
const goodsTypeSchema = new mongoose.Schema({
    name: String,
    value:{
        type:Number,
        default:1
    }
})
mongoose.model("goodsTypeModel", goodsTypeSchema, "goodsType");