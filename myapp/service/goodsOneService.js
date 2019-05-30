const { addGoodsOne,getGoodsOne } = require("../dao/goodsOneDao.js");

module.exports.addGoodsOne = async data => {
    await addGoodsOne(data);
    return true;
}
module.exports.getGoodsOne = async () => {
    return await getGoodsOne();
}
