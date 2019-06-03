const mongoose = require("mongoose");

module.exports.addGoods = async data => {
    return await mongoose.model("goodsModel").create(data);
}
module.exports.getGoods = async (page) => {
    console.log(page);
    
    const totalCount = await mongoose.model("goodsModel").countDocuments();
    console.log(page.pageSize);
    
    const totalPage = Math.ceil(totalCount / page.pageSize);
    console.log(totalCount,totalPage);
    
    const goodsData = await mongoose.model("goodsModel")
        .find()
        .populate("typeId")
        .populate("methodId")
        .populate("suitId")
        .populate('oneId')
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, goodsData, currentPage: page.currentPage, pageSize: page.pageSize }
    return await mongoose.model("goodsModel").find();
}
module.exports.deleteGoods = async (data) => {
    console.log(data);
    
    return await mongoose.model("goodsModel").deleteOne(data);
}