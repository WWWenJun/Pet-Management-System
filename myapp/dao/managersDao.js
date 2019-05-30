const mongoose = require("mongoose");

module.exports.addManagers = async Managers => {
    return await mongoose.model("managerModel").create(Managers);
}
module.exports.changeManagers = async Managers => {
   const { _id,name,position,phone,level } = Managers;
    return mongoose.model("managerModel").update({ _id }, {name,position,phone,level });
}
module.exports.getManagers = async () => {//查找，关联
    return await mongoose.model("managerModel").find() ;
}
module.exports.removeManagers = async student => {
    return await mongoose.model("managerModel").remove(student);
}
module.exports.getManagersByPage = async page => {
    const totalCount = await mongoose.model("managerModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const managersData = await mongoose.model("managerModel")
        .find()
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, managersData, currentPage: page.currentPage, pageSize: page.pageSize }
}