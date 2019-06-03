
const { addStore,getStore,deleteStore,updateStore,getStoreByPage } = require("../dao/storeDao.js");

module.exports.addStore = async store => {
    await addStore(store);
    return true;
}
module.exports.getStore = async () => {//获取
    return await getStore();
}
module.exports.deleteStore = async storeId => {
    const result = await deleteStore(storeId);
}
module.exports.updateStore = async store => {
    const result = await updateStore(store);
}
module.exports.getStoreByPage=async page=>{
    return await getStoreByPage(page);
 }