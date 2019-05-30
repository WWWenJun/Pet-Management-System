const mongoose = require("mongoose");

module.exports.addGoodsType = async data => {
    return await mongoose.model("goodsTypeModel").create(data);
}
module.exports.getGoodsType = async () => {
    return await mongoose.model("goodsTypeModel").find();
}