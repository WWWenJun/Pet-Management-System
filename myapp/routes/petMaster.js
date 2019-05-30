var express = require('express');
var router = express.Router();
//分页获取信息
router.post("/getPetMasterByPage",async function(req, res, next) {
    res.send( await getPetMasterByPage(req.body));
  });

const {addPetMaster,searchPetMaster } = require("../service/petMasterService");
//新增
router.post('/addPetMaster ', async function (req, res, next) {
    res.send(await addPetMaster(req.body));
});

//查询
router.post('/searchPetMaster',async function (req, res, next) {
    res.send(await searchPetMaster(req.body));
  });