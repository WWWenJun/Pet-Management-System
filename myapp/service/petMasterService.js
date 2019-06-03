const {addPetMaster,searchPetMaster,getPetMasterByPage} = require("../dao/petMasterDao");

//获取数据
module.exports.getPetMasterByPage = async function(petMaster) {
    const data = await getPetMasterByPage(petMaster);
    return data;
  };
  
//新增
module.exports.addPetMaster= async petMaster => {
    await addPetMaster(petMaster);
    return true;
}

//查询
module.exports.searchPetMaster = async function(page) {
    return await searchPetMaster(page);
  };