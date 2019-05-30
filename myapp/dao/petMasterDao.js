const mongoose = require("mongoose");

//分页获取电影数据
module.exports.getPetMasterByPage = async function(page) {
    const totalCount= await mongoose.model("petMasterModel").countDocuments();//获取总条数
    const totalPage=Math.ceil(totalCount/page.pageSize);
    const petMasterData= await mongoose.model("petMasterModel")
             .find()
             .skip(page.pageSize*(page.currentPage-1))//跳过的条数
             .limit(page.pageSize);
    return {totalCount,totalPage,petMasterData,currentPage:page.currentPage,pageSize:page.pageSize};
};
//新增数据
module.exports.addPetMaster = async petMaster => {
    return await mongoose.model("petMasterModel").create(petMaster);
}

//查询数据
module.exports.searchPetMaster=async (page)=>{
    const{type,value}=page;
    const petMasterData = await mongoose.model("petMasterModel")
    .find({[type]:{$regex:value,$options:"$i"}})
    .skip(page.pageSize * (page.currentPage - 1))
    .limit(page.pageSize - 0);
    const totalCount = petMasterData.length;
    const totalPage = Math.ceil(totalCount / page.pageSize);
    return { totalCount, totalPage, petMasterData, currentPage: page.currentPage, pageSize: page.pageSize }
  }