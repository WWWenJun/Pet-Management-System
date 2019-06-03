const mongoose = require("mongoose");

// 创建商品类型
const goodsMethodSchema = new mongoose.Schema({
    name: String,
    value:{
        type:Number,
        default:1
    }
})
mongoose.model("goodsMethodModel", goodsMethodSchema, "goodsMethod");