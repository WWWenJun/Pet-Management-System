var express = require('express');
var router = express.Router();

const { addGoodsType,getGoodsType } = require("../service/goodsTypeService.js");
router.post('/addGoodsType', async function (req, res, next) {
    res.send(await addGoodsType(req.body));
});
router.get('/getGoodsType', async function (req, res, next) {
    res.send(await getGoodsType());
});
module.exports = router;