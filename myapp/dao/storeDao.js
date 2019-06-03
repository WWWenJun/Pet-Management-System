const mongoose = require("mongoose");

module.exports.addStore = async data => {
    return await mongoose.model("storeModel").create(data);
}
module.exports.getStore = async () => {
    return await mongoose.model("storeModel").find();
}
module.exports.deleteStore = async storeId => {
    return await mongoose.model("storeModel").deleteOne(storeId);
}
module.exports.updateStore=async (data)=>{//修改
    const { _id, state } = data;
    return await mongoose.model("storeModel").update({ _id }, { state });
    // return await mongoose.model("studentsModel").find(studentId);
}
module.exports.getStoreByPage=async page=>{//分页显示
    console.log(page);
    
    const totalCount=await mongoose.model("storeModel").countDocuments();
    const totalPage=Math.ceil(totalCount/page.pageSize);
    const storesData=await mongoose.model("storeModel").find().populate("classId").skip(page.pageSize*(page.currentPage-1)).limit(page.pageSize);
    // console.log(totalCount,totalPage,storesData);
    return {totalCount,totalPage,storesData,currentPage:page.currentPage,pageSize:page.pageSize}
}