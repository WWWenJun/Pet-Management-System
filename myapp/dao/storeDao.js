const mongoose = require("mongoose");

module.exports.addStore = async data => {
    return await mongoose.model("storeModel").create(data);
}
module.exports.getStore = async () => {
    return await mongoose.model("storeModel").find();
}
module.exports.deleteStore = async storeId => {
    return await mongoose.model("storeModel").deleteOne(storeId);
}
module.exports.updateStore=async (data)=>{//修改
    console.log(data);
    
    const { _id, state } = data;
    return await mongoose.model("storeModel").update({ _id }, { state });
    // return await mongoose.model("studentsModel").find(studentId);
}
