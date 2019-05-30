const { addGoods,getGoods } = require("../dao/goodsDao.js");

module.exports.addGoods = async data => {
    await addGoods(data);
    return true;
}
module.exports.getGoods = async () => {
    return await getGoods();
}