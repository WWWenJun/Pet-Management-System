const mongoose = require("mongoose");
// 定义供应商结构
const supplierSchema = new mongoose.Schema({
    name: String,
    address:String,
})
mongoose.model("supplierModel", supplierSchema, "supplier");