const mongoose = require("mongoose");

// 创建学生数据结构
const goodsSchema = new mongoose.Schema({
    name: String,
    typeId: {//品类
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodsTypeModel"
    },
    methodId: {//
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodsMethodModel"
    },
    suitId: {//适用规格
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodsSuitModel"
    },
    oneId: {//z专属规格
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodsOneModel"
    },
    pack: String,//包装规格1kg/5kg..
    flavor:String,//口味
    special:String,//特殊功用
    place:String,//产地    
    data:String,//日期    
    quality:String,//保质期    
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplierModel"
    },
    item:String,//特色
    price:String,//特色
    img:String,//特色
    storeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"storeModel"        
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'storeusersModel'       
    },
})
// 创建学生数据模型
mongoose.model("goodsModel", goodsSchema, "goods")