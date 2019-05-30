const { addGoodsSuit,getGoodsSuit } = require("../dao/goodsSuitDao.js");

module.exports.addGoodsSuit = async data => {
    await addGoodsSuit(data);
    return true;
}
module.exports.getGoodsSuit = async () => {
    return await getGoodsSuit();
}
