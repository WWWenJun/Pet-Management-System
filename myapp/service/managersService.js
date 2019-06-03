const { addManagers, getManagers,removeManagers,getManagersByPage,getSlurManagers,changeManagers } = require("../dao/managersDao");

module.exports.addManagers = async Managerses => {
    await addManagers(Managerses);
    return true;
}
module.exports.changeManagers = async Managerses => {
    return await changeManagers(Managerses);
}

module.exports.getManagers = async () => {
    return await getManagers();
}
module.exports.getSlurManagers = async (data) => {
    return await getSlurManagers(data);
}
module.exports.getManagersByPage = async page => {
    return await getManagersByPage(page)
}
module.exports.removeManagers = async student => {
    const result = await removeManagers(student);
    if (result) {
        return true;
    }
    return false;
}