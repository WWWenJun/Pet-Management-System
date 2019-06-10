const mongoose = require("mongoose");
module.exports.getSlurServies = async ({type="name",value=""}={}) => {//模糊查询
    return await mongoose.model("serveModel").find({
        [type]:{$regex:value,$options:'$i'}
    });
}

module.exports.addServies = async Servies => {
    return await mongoose.model("serveModel").create(Servies);
}
module.exports.changeServies = async Servies => {
   const { _id} = Servies;
    return await mongoose.model("serveModel").update({ _id }, Servies);
}
module.exports.getServies = async () => {//查找，关联
    return await mongoose.model("serveModel").find().populate("storeId") ;
}
module.exports.removeServies = async Servies => {
    return await mongoose.model("serveModel").findByIdAndDelete(Servies);
}
module.exports.getServiesByPage = async page => {
    const totalCount = await mongoose.model("serveModel").find({[page.type]:{$regex:page.value,$options:'$i'}}).countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const serviesData = await mongoose.model("serveModel")
        .find({[page.type]:{$regex:page.value,$options:'$i'}}).populate("storeId")
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, serviesData, currentPage: page.currentPage, pageSize: page.pageSize }
}