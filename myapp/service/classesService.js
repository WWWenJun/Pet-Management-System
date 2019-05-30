const { addClass, getClasses,removeClass,getClassesByPage,changeStudent } = require("../dao/classesDao");

module.exports.addClass = async classes => {
    await addClass(classes);
    return true;
}
module.exports.changeStudent = async students => {
    const { _id} = students;
    return mongoose.model("studentsModel").update({ _id }, { name, age, gender });
}

module.exports.getClasses = async () => {
    return await getClasses();
}
module.exports.getClassesByPage = async page => {
    return await getClassesByPage(page)
}
module.exports.removeClass = async student => {
    const result = await removeClass(student);
    if (result) {
        return true;
    }
    return false;
}