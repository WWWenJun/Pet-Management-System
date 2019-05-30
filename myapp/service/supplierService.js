const { addSupplier,searchSupplier,getSupplierByPage} = require("../dao/supplierDao");

//获取数据
module.exports.getSupplierByPage = async function(supplier) {
    const data = await getSupplierByPage(supplier);
    return data;
  };
  
//增加
module.exports.addSupplier = async supplier => {
    await addSupplier(supplier);
    return true;
}

//查询
module.exports.searchSupplier = async function(page) {
    return await searchSupplier(page);
  };