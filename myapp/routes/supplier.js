var express = require('express');
var router = express.Router();

//分页获取信息
router.post("/getSupplierByPage",async function(req, res, next) {
    res.send( await getSupplierByPage(req.body));
  });

//新增
const {addSupplier,searchSupplier } = require("../service/supplierService");

router.post('/addSupplier', async function (req, res, next) {
    res.send(await addSupplier(req.body));
});

//查询
router.post('/searchSupplier',async function (req, res, next) {
    res.send(await searchSupplier(req.body));
  });