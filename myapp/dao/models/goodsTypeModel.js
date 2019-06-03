const mongoose = require("mongoose");

// 创建商品类型
const goodsTypeSchema = new mongoose.Schema({
    name: String,
})
mongoose.model("goodsTypeModel", goodsTypeSchema, "goodsType");