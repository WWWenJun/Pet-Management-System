const mongoose = require("mongoose");

// 创建商品类型
const goodsOneSchema = new mongoose.Schema({
    name: String,
    value:{
        type:Number,
        default:1
    }
})
mongoose.model("goodsOneModel", goodsOneSchema, "goodsOne");