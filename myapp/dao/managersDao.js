const mongoose = require("mongoose");

module.exports.getSlurManagers = async ({type="name",value=""}={}) => {//模糊查询
    return await mongoose.model("managerModel").find({
        [type]:{$regex:value,$options:'$i'}
    });
}
module.exports.addManagers = async Managers => {
    return await mongoose.model("managerModel").create(Managers);
}
module.exports.changeManagers = async Managers => {
   const { _id} = Managers;
    return mongoose.model("managerModel").update({ _id}, Managers);
}
module.exports.getManagers = async () => {//查找，关联
    return await mongoose.model("managerModel").find() ;
}
module.exports.removeManagers = async student => {
    return await mongoose.model("managerModel").remove(student);
}
module.exports.getManagersByPage = async page => {
    const totalCount = await mongoose.model("managerModel").find({role:page.role,[page.type]:{$regex:page.value,$options:'$i'}})
    .countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const managersData = await mongoose.model("managerModel")
        .find({role:page.role,[page.type]:{$regex:page.value,$options:'$i'}})
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, managersData, currentPage: page.currentPage, pageSize: page.pageSize }
}