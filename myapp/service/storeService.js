const { addStore,searchStore,getStoreByPage} = require("../dao/storeDao");
//获取数据
module.exports.getStoreByPage = async function(store) {
    const data = await getStoreByPage(store);
    return data;
  };

//新增
module.exports.addStore = async store => {
    await addStore(store);
    return true;
}

//查询
module.exports.searchStore = async function(page) {
    return await searchStore(page);
  };