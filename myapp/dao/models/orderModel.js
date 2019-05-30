const mongoose = require("mongoose");

// 创建宠物类型
const orderSchema = new mongoose.Schema({
    goodsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodsModel"
    }],
    serveId:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "serveModel"
        }
    ],
    petMasterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"petMasterModel"
    },
    state:{
        type:String,
        default:"0"
    }
    
})
mongoose.model("orderModel", orderSchema, "order");