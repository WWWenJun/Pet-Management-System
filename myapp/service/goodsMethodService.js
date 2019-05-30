const { addGoodsMethod,getGoodsMethod } = require("../dao/goodsMethodDao.js");

module.exports.addGoodsMethod = async data => {
    await addGoodsMethod(data);
    return true;
}
module.exports.getGoodsMethod = async () => {
    return await getGoodsMethod();
}
