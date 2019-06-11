const mongoose = require("mongoose");

module.exports.addOrders = async Managers => {
    return await mongoose.model("orderModel").create(Managers);
}