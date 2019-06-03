// import { calculateObjectSize } from "../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson";

const { addServies, getServies,removeServies,getServiesByPage,getSlurServies,changeServies } = require("../dao/serviesDao");

module.exports.addServies = async Servieses => {
    await addServies(Servieses);
    return true;
}
module.exports.changeServies = async Servies => {
    return await changeServies(Servies);
}
module.exports.getSlurServies = async (Servieses) => {
    return await getSlurServies(Servieses);
}
module.exports.getServies = async (Servieses) => {
    return await getServies(Servieses);
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