const mongoose = require("mongoose");

module.exports.addClass = async classes => {
    return await mongoose.model("classesModel").create(classes);
}
module.exports.getClasses = async () => {
    return await mongoose.model("classesModel").find();
}
module.exports.removeClass = async student => {
    return await mongoose.model("classesModel").remove(student);
}
module.exports.getClassesByPage = async page => {
    const totalCount = await mongoose.model("classesModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const ClassesData = await mongoose.model("classesModel")
        .find()
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, ClassesData, currentPage: page.currentPage, pageSize: page.pageSize }
}