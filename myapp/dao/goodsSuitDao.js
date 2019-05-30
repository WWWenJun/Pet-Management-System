const mongoose = require("mongoose");

module.exports.addGoodsSuit = async data => {
    return await mongoose.model("goodsSuitModel").create(data);
}
module.exports.getGoodsSuit = async () => {
    return await mongoose.model("goodsSuitModel").find();
}