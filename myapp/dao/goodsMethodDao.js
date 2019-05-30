const mongoose = require("mongoose");

module.exports.addGoodsMethod = async data => {
    return await mongoose.model("goodsMethodModel").create(data);
}
module.exports.getGoodsMethod = async () => {
    return await mongoose.model("goodsMethodModel").find();
}