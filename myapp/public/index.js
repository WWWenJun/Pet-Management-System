import Login from "./modules/login.js";
import Reg from "./modules/reg.js";
import System from "./modules/system/system.js";
import StudentsList from "./modules/system/students/studentsList.js";
import AddStudents from "./modules/system/students/addStudents.js";
import ClassesList from "./modules/system/classes/classesList.js";
import AddClasses from "./modules/system/classes/addClasses.js";

const routes = {
    "/login": () => { new Login },  
    "/login/:id": (id) => { new Login(id) },
    "/reg": () => { new Reg },
    "/system": {
        on: () => { new System },
        "/studentsList": () => { new StudentsList },
        "/addStudents": () => { new AddStudents },
        "/classesList": () => { new ClassesList },
        "/addClasses": () => { new AddClasses }
    },

}

Router(routes).configure({ recurse: 'forward' }).init();
//跨域 访问其他的非同源的页面 link script img 支持跨域（请求非同源）
//同源策略：属于浏览器的安全策略
//  协议：//ip 端口 相同叫同源
//解决跨域：jsonp cors
//josnp(只能处理get)
//开发模式：
//注：koa，express ， 
//模块化：es6开始
//seajs（规范：CMD） requirejs（AMD）