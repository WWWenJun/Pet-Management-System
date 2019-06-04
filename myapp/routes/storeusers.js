var express = require('express');
var path = require("path");
var fs = require("fs");
var router = express.Router();
const { login, isUsers, addUsers, reg, queryUsers,  modUser, delUser } = require("../service/storeusersService");
// const { uploadFile } = require("../util/upload");//用于上传用户照片

/* GET users listing. //用户路由*/
router.post('/isLogin', async function (req, res, next) {//判断用户的登陆状态
  if (req.session.user) {
    res.send(req.session.user);
  } else { res.send(false); }
});
router.get("/isUsers", async function (req, res, next) {//判断---用户账号是否存在
  res.send(await isUsers(req.query));
})

router.post("/addUsers", async function (req, res, next) {//添加---用户信息
  res.send(await addUsers(req.body));
})
router.post('/logout', async function (req, res, next) {//用户退出
  req.session.user = null;
  res.send(true);
});
router.post('/login', async function (req, res, next) {//判断用户能否登录
  const result = await login(req.body);
  if (result.length>0) {
    req.session.user = result[0]._id;
    res.send(result);
  } else {
    res.send(result);
  }
});

router.get("/queryUsers", async function (req, res, next) {//获取用户信息
  res.send(await queryUsers(req.query));
})
router.post("/modUser", async function (req, res, next) { //修改用户信息
  res.send(await modUser(req.body));
})
router.post("/delUser", async function (req, res, next) {//删除用户信息
  res.send(await delUser(req.body));
})
module.exports = router;
