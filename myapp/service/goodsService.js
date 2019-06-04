const { addGoods,getGoods,deleteGoods,changeGoods } = require("../dao/goodsDao.js");

module.exports.addGoods = async data => {
    await addGoods(data);
    return true;
}
module.exports.getGoods = async (page) => {
    return await getGoods(page);
}
module.exports.changeGoods = async (page) => {
    return await changeGoods(page);
}
module.exports.deleteGoods = async (data) => {
    return await deleteGoods(data);
}