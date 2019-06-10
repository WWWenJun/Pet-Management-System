const mongoose = require("mongoose");

module.exports.addGoods = async data => {
    return await mongoose.model("goodsModel").create(data);
}
module.exports.getGoods = async (page) => {
    const totalCount = await mongoose.model("goodsModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const goodsData = await mongoose.model("goodsModel")
        .find({userId:page.userId})
        .populate("typeId")
        .populate("methodId")
        .populate("suitId")
        .populate('oneId')
        .populate('supplierId')
        .populate('storeId')
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, goodsData, currentPage: page.currentPage, pageSize: page.pageSize }
    return await mongoose.model("goodsModel").find();
}
module.exports.deleteGoods = async (data) => {
    console.log(data);
    
    return await mongoose.model("goodsModel").deleteOne(data);
}
module.exports.changeGoods = async page => {
    const { _id,name,typeId,methodId,suitId,oneId,pack,flavor,special,place,data,quality,supplierId,item 
        ,price,img,storeId,userId
    } = page;
     return mongoose.model("goodsModel").update({ _id},{name,typeId,methodId,suitId,oneId,pack,flavor,special,place,data,quality,supplierId,item 
        ,price,img,storeId,userId});
 }
module.exports.searchGoods=async (page)=>{
    const{type,value}=page;
    let totalCount;
    console.log(type);
    
    if(type==="_id"){
    console.log(type);
    
    const goodsData = await mongoose.model("goodsModel")
    .find({[type]:value})
    .populate("typeId")
        .populate("methodId")
        .populate("suitId")
        .populate('oneId')
        .populate('supplierId')
        .populate('storeId')
    .skip(page.pageSize * (page.currentPage - 1))
    .limit(page.pageSize - 0);
    if(value == ''){
        totalCount = await mongoose.model("goodsModel").countDocuments()//获取总条数
    }else{
        totalCount = goodsData.length;
    }
    const totalPage = Math.ceil(totalCount / page.pageSize -0);
    return { totalCount, totalPage, goodsData, currentPage: page.currentPage, pageSize: page.pageSize }
    }
    else{
        const goodsData = await mongoose.model("goodsModel")
        .find({[type]:{$regex:value,$options:"$i"}})
        .populate("typeId")
            .populate("methodId")
            .populate("suitId")
            .populate('oneId')
            .populate('supplierId')
            .populate('storeId')
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
        if(value == ''){
            totalCount = await mongoose.model("goodsModel").countDocuments()//获取总条数
        }else{
            totalCount = goodsData.length;
        }
        const totalPage = Math.ceil(totalCount / page.pageSize -0);
        return { totalCount, totalPage, goodsData, currentPage: page.currentPage, pageSize: page.pageSize }
    }
  }