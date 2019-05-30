const { addGoodsType,getGoodsType } = require("../dao/goodsTypeDao.js");

module.exports.addGoodsType = async data => {
    await addGoodsType(data);
    return true;
}
module.exports.getGoodsType = async () => {
    return await getGoodsType();
}
