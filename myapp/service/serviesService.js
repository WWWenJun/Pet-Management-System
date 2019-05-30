const { addServies, getServies,removeServies,getServiesByPage,changeServies } = require("../dao/serviesDao");

module.exports.addServies = async Servieses => {
    await addServies(Servieses);
    return true;
}
module.exports.changeServies = async Servies => {
    return await changeServies(Servies);
}

module.exports.getServies = async () => {
    return await getServies();
}
module.exports.getServiesByPage = async page => {
    return await getServiesByPage(page)
}
module.exports.removeServies = async Servies=> {
    const result = await removeServies(Servies);
    if (result) {
        return true;
    }
    return false;
}