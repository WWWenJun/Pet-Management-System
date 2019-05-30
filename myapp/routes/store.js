var express = require('express');
var router = express.Router();


//分页获取信息
router.post("/getStoreByPage",async function(req, res, next) {
    res.send( await getStoreByPage(req.body));
  });

//新增
const {addStore,searchStore } = require("../service/storeService.js");
router.post('/addStore', async function (req, res, next) {
    res.send(await addStore(req.body));
});

//查询
router.post('/searchStore',async function (req, res, next) {
    res.send(await searchStore(req.body));
  });