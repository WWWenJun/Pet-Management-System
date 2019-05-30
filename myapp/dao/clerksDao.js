const mongoose = require("mongoose");

module.exports.addClerks = async Clerks => {
    return await mongoose.model("clerkModel").create(Clerks);
}
module.exports.changeClerks = async Clerks => {
   const { _id,name,position,phone,level } = Clerks;
    return mongoose.model("clerkModel").update({ _id }, {name,position,phone,level });
}
module.exports.getClerks = async () => {//查找，关联
    return await mongoose.model("clerkModel").find().populate("storeId") ;
}
module.exports.removeClerks = async student => {
    return await mongoose.model("clerkModel").remove(student);
}
module.exports.getClerksByPage = async page => {
    const totalCount = await mongoose.model("clerkModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const clerksData = await mongoose.model("clerkModel")
        .find()
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, clerksData, currentPage: page.currentPage, pageSize: page.pageSize }
}