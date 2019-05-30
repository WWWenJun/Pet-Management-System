const mongoose = require("mongoose");

// 创建宠物类型
const petSchema = new mongoose.Schema({
    name: String, //m名字
    kind:String,//品类，猫狗
    varity:String,//种类
    color:String,//颜色
    birthday:String,//生日
    nature:String,//性格
    petMasterId: {//拥有的宠物
        type: mongoose.Schema.Types.ObjectId,
        ref: "petMasterModel"
    },
})
mongoose.model("petModel", petSchema, "pet");