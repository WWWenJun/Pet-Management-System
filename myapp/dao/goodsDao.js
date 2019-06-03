const mongoose = require("mongoose");

module.exports.addGoods = async data => {
    return await mongoose.model("goodsModel").create(data);
}
module.exports.getGoods = async () => {
    return await mongoose.model("goodsModel").find();
}