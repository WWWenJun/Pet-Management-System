const mongoose = require("mongoose");

// 创建商品类型
const goodsOneSchema = new mongoose.Schema({
    name: String,
})
mongoose.model("goodsOneModel", goodsOneSchema, "goodsOne");