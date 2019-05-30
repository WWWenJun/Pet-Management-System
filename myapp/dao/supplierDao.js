const mongoose = require("mongoose");

//分页获取电影数据
module.exports.getSupplierByPage = async function(page) {
    const totalCount= await mongoose.model("supplierModel").countDocuments();//获取总条数
    const totalPage=Math.ceil(totalCount/page.pageSize);
    const supplierData= await mongoose.model("supplierModel")
             .find()
             .skip(page.pageSize*(page.currentPage-1))//跳过的条数
             .limit(page.pageSize);
    return {totalCount,totalPage,supplierData,currentPage:page.currentPage,pageSize:page.pageSize};
};

//新增数据
module.exports.addSupplier = async supplier => {
    return await mongoose.model("supplierModel").create(supplier);
}

//查询数据
module.exports.searchSupplier=async (page)=>{
    const{type,value}=page;
    const supplierData = await mongoose.model("supplierModel")
    .find({[type]:{$regex:value,$options:"$i"}})
    .skip(page.pageSize * (page.currentPage - 1))
    .limit(page.pageSize - 0);
    const totalCount = supplierData.length;
    const totalPage = Math.ceil(totalCount / page.pageSize);
    return { totalCount, totalPage, supplierData, currentPage: page.currentPage, pageSize: page.pageSize }
  }