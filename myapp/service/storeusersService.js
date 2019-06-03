const { login, isUsers, addUsers, queryUsers, modUser, delUser } = require("../dao/storeusersDao");

module.exports.login = async function (user) {//服务层发送数据给持久层
    const data = await login(user);
    return data.length > 0 ? true : false;
}

module.exports.isUsers = async function (users) {//判断---用户是否存在
    const data = await isUsers(users);
    return data.length > 0 ? true : false;
}

module.exports.addUsers = async function (users) {//添加---用户信息到数据库
    return await addUsers(users);
}
module.exports.queryUsers = async function (user) {//查询用户信息
    return await queryUsers(user);
}
module.exports.modUser = async function (user) {//更新用户信息
    return await modUser(user);
}
module.exports.delUser = async function (user) {//删除用户信息
    return await delUser(user);
}