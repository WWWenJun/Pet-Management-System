const { addClerks, getClerks,removeClerks,getClerksByPage,changeClerks } = require("../dao/clerksDao");

module.exports.addClerks = async Clerkses => {
    await addClerks(Clerkses);
    return true;
}
module.exports.changeClerks = async Clerkses => {
    return await changeClerks(Clerkses);
}

module.exports.getClerks = async () => {
    return await getClerks();
}
module.exports.getClerksByPage = async page => {
    return await getClerksByPage(page)
}
module.exports.removeClerks = async student => {
    const result = await removeClerks(student);
    if (result) {
        return true;
    }
    return false;
}