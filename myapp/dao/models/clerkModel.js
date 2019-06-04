const mongoose = require("mongoose");
// 定义职工数据结构
const clerkSchema = new mongoose.Schema({
    name: String,
    position:String,
    phone:String,
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "storeModel"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "storeusersModel"
    },
    level:String,
    storeName:String
})
// 定义数据模型
mongoose.model("clerkModel", clerkSchema, "clerk");
