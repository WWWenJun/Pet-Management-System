const mongoose = require("mongoose");
// 定义职工数据结构
const cardSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "storeModel"
    },
    petMasterModel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "petMasterModel"
    }
})
// 定义数据模型
mongoose.model("cardModel", cardSchema, "card");
