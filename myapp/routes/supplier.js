var express = require('express');
var router = express.Router();
const {addSupplier,searchSupplier,getSupplierByPage } = require("../service/supplierService");
//分页获取信息
router.get("/getSupplierByPage",async function(req, res, next) {
    res.send(await getSupplierByPage(req.query));
   
  });
 
//新增
router.post('/addSupplier', async function (req, res, next) {
    res.send(await addSupplier(req.body));
});

//查询
router.post('/searchSupplier',async function (req, res, next) {
    res.send(await searchSupplier(req.body));
  });

  module.exports = router;