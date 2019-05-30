const mongoose = require("mongoose");

module.exports.addGoodsOne = async data => {
    return await mongoose.model("goodsOneModel").create(data);
}
module.exports.getGoodsOne = async () => {
    return await mongoose.model("goodsOneModel").find();
}