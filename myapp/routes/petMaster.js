var express = require('express');
var router = express.Router();
const {addPetMaster,searchPetMaster } = require("../service/petMasterService");
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

//新增
router.post('/addPetMaster', async function (req, res, next) {
    res.send(await addPetMaster(req.body));
});

//查询
router.post('/searchPetMaster',async function (req, res, next) {
    res.send(await searchPetMaster(req.body));
  });

  module.exports = router;