const mongoose = require("mongoose");

module.exports.addServies = async Servies => {
    return await mongoose.model("servieModel").create(Servies);
}
module.exports.changeServies = async Servies => {
   const { _id,name, kind,timesuit,service,needTime,server,price,} = Servies;
    return mongoose.model("ServieModel").update({ _id }, {name, kind,timesuit,service,needTime,server,price,});
}
module.exports.getServies = async () => {//查找，关联
    return await mongoose.model("servieModel").find().populate("storeId") ;
}
module.exports.removeServies = async Servies => {
    return await mongoose.model("servieModel").remove(Servies);
}
module.exports.getServiesByPage = async page => {
    const totalCount = await mongoose.model("servieModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const serviesData = await mongoose.model("servieModel")
        .find()
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, serviesData, currentPage: page.currentPage, pageSize: page.pageSize }
}