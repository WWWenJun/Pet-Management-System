const mongoose = require("mongoose");

// 创建商品类型
const goodsSuitSchema = new mongoose.Schema({
    name: String,
})
mongoose.model("goodsSuitModel", goodsSuitSchema, "goodsSuit");