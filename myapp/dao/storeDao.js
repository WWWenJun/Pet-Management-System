const mongoose = require("mongoose");

//分页获取电影数据
module.exports.getStoreByPage = async function(page) {
    const totalCount= await mongoose.model("storeModel").countDocuments();//获取总条数
    const totalPage=Math.ceil(totalCount/page.pageSize);
    const storeData= await mongoose.model("storeModel")
             .find()
             .skip(page.pageSize*(page.currentPage-1))//跳过的条数
             .limit(page.pageSize);
    return {totalCount,totalPage,storeData,currentPage:page.currentPage,pageSize:page.pageSize};
};
//新增数据
module.exports.addStore = async store => {
    return await mongoose.model("storeModel").create(store);
}

//查询数据
module.exports.searchStore=async (page)=>{
    const{type,value}=page;
    const storeData = await mongoose.model("storeModel")
    .find({[type]:{$regex:value,$options:"$i"}})
    .skip(page.pageSize * (page.currentPage - 1))
    .limit(page.pageSize - 0);
    const totalCount = storeData.length;
    const totalPage = Math.ceil(totalCount / page.pageSize);
    return { totalCount, totalPage, storeData, currentPage: page.currentPage, pageSize: page.pageSize }
  }