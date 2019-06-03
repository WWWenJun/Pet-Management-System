const mongoose = require("mongoose")

module.exports.login = async function (user) {//登录判断
    return await mongoose.model("storeusersModel").find(user);
}

module.exports.isUsers = async function (users) {//用于验证用户是否被注册
    return await mongoose.model("storeusersModel").find(users);
}

module.exports.addUsers = async function (users) {//添加---用户信息
    return await mongoose.model("storeusersModel").create(users);
}

module.exports.queryUsers = async function (user) { //查询 
    const totalCount = await mongoose.model("storeusersModel").find(storeuser.condition).countDocuments();//计数
    const totalPage = Math.ceil(totalCount / user.pageSize);//页数
    const usersData = await mongoose.model("storeusersModel")//查询相关页的用户数据
        .find(user.condition)
        .skip(user.pageSize * (user.currentPage - 1))
        .limit(user.pageSize - 0);
    return {
        currentPage: user.currentPage,
        pageSize: user.pageSize,
        totalPage,
        totalCount,
        usersData,
    }
}
module.exports.modUser = async function (userData) { //更新用户信息
    return await mongoose.model("storeusersModel").update({ _id: userData._id }, userData);
}
module.exports.delUser = async function (userData) { //删除用户信息
    return await mongoose.model("storeusersModel").remove(userData);
}