const mongoose = require("mongoose");

module.exports.addClerks = async Clerks => {
    return await mongoose.model("clerkModel").create(Clerks);
}
module.exports.changeClerks = async Clerks => {
   const { _id,name,position,phone,level } = Clerks;
    return await mongoose.model("clerkModel").update({ _id }, {name,position,phone,level});
}
module.exports.getSlurClerks = async ({type="name",value=""}={}) => {//模糊查询
    return await mongoose.model("clerkModel").find({
        [type]:{$regex:value,$options:'$i'}
    });
}
module.exports.getClerks = async () => {//查找，关联
    return await mongoose.model("clerkModel").find().populate("storeId") ;
}
module.exports.removeClerks = async student => {
    return await mongoose.model("clerkModel").findByIdAndDelete(student);
}
module.exports.getClerksByPage = async page => {
    const totalCount = await mongoose.model("clerkModel").find({[page.type]:{$regex:page.value,$options:'$i'}}).countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const clerksData = await mongoose.model("clerkModel")
        .find({[page.type]:{$regex:page.value,$options:'$i'}})
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, clerksData, currentPage: page.currentPage, pageSize: page.pageSize }
}