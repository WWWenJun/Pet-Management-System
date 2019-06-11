const mongoose = require("mongoose");

module.exports.addStore = async data => {
    return await mongoose.model("storeModel").create(data);
}
module.exports.getStore = async (userId) => {
    return await mongoose.model("storeModel").find(userId);
}
module.exports.getStoreFont = async (store) => {
    console.log('====================================');
    console.log(store.address);
    console.log('====================================');
    const data = await mongoose.model("storeModel").find({address:{$regex:store.address,$options:"$i"}});
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return data;
}

module.exports.deleteStore = async storeId => {
    return await mongoose.model("storeModel").deleteOne(storeId);
}
module.exports.updateStore = async (data) => { //修改
    const {
        _id,
        state
    } = data;
    return await mongoose.model("storeModel").update({
        _id
    }, {
        state
    });
    // return await mongoose.model("studentsModel").find(studentId);
}
module.exports.getStoreByPage = async page => { //分页显示
    const totalCount = await mongoose.model("storeModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const storesData = await mongoose.model("storeModel").find().populate("classId").skip(page.pageSize * (page.currentPage - 1)).limit(page.pageSize);
    // console.log(totalCount,totalPage,storesData);
    return {
        totalCount,
        totalPage,
        storesData,
        currentPage: page.currentPage,
        pageSize: page.pageSize
    }
}

module.exports.selectStore = async data => {
    console.log(data);
    
    const {title,value}=data;
    return await mongoose.model("storeModel").find({name:value})
}