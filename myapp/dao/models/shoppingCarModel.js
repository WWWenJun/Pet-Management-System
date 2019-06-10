const mongoose = require("mongoose");

// 创建服务类型
const shoppingCarSchema = new mongoose.Schema({
    goodsId: {//所属门店
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodsModel"
    },
    serveId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "serveModel"
    },
    
})
mongoose.model("shoppingCarModel", shoppingCarSchema, "shoppingCar");