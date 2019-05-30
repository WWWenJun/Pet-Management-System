var express = require('express');
var router = express.Router();

const { addGoodsMethod,getGoodsMethod } = require("../service/goodsMethodService.js");
router.post('/addGoodsMethod', async function (req, res, next) {
    res.send(await addGoodsMethod(req.body));
});
router.get('/getGoodsMethod', async function (req, res, next) {
    res.send(await getGoodsMethod());
});
module.exports = router;