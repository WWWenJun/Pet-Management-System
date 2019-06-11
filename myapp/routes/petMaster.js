var express = require('express');
var router = express.Router();
const {addPetMaster,searchPetMaster,checkPhone,petMasterLogin } = require("../service/petMasterService");
const {uploadFile}=require("../util/upload");//图片上传后台插件工具
//分页获取信息
router.post("/getPetMasterByPage",async function(req, res, next) {
    res.send( await getPetMasterByPage(req.body));
  });

  //上传头像的请求接口
router.post("/addImages",async function(req, res, next) {
    const data= await uploadFile(req,res,{
      fileType:"avatar",
      path:"./public/images"
    });
    res.send(data);
});

//新增(宠主注册)
router.post('/addPetMaster', async function (req, res, next) {
    res.send(await addPetMaster(req.body));
});

//检查手机号码是否存在
router.post('/checkPhone', async function (req, res, next) {
  res.send(await checkPhone(req.body));
});

//宠主登录
router.post('/petMasterLogin', async function (req, res, next) {
  res.send(await petMasterLogin(req.body));
});

//查询
router.post('/searchPetMaster',async function (req, res, next) {
    res.send(await searchPetMaster(req.body));
  });

  module.exports = router;