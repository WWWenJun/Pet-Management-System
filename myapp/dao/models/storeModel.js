const mongoose = require("mongoose");

// 创建门店数据结构
const storeSchema = new mongoose.Schema({
    name: String,
    num: String,//执照号码
    img: String,//执照图片
    address:String,//营业地址
    local:String,//定位
    person:String,//法人
    phone:String,//联系电话
    head:String,//头图
    item:String,//特色
    vip:{//VIP等级
        type:String,
        default:'0'
    },
    scale:String,//佣金比例
    state:{//门店状态
        type:String,
        default:'申请中'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
// 创建学生数据模型
mongoose.model("storeModel", storeSchema, "store");