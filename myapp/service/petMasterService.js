const {addPetMaster,searchPetMaster,getPetMasterByPage,checkPhone,petMasterLogin} = require("../dao/petMasterDao");

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

//检查手机号码是否注册
module.exports.checkPhone= async phone => {
  const result = await checkPhone(phone);
 if(result.length > 0){
   return true;
 }else{
   return false;
 }
}

//宠主登录验证
module.exports.petMasterLogin= async petMaser => {
  const result = await petMasterLogin(petMaser);
  return result;
}

//查询
module.exports.searchPetMaster = async function(page) {
    return await searchPetMaster(page);
  };