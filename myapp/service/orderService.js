const { addOrders } = require("../dao/orderDao");

module.exports.addOrders= async order => {
    order.goodsId = order.goodsId.split(",")
    await addOrders(order);
    return true;
}