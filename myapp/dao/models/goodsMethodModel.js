const mongoose = require("mongoose");

// 创建商品类型
const goodsMethodSchema = new mongoose.Schema({
    name: String,
})
mongoose.model("goodsMethodModel", goodsMethodSchema, "goodsMethod");