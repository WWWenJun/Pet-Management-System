var express = require('express');
var router = express.Router();

const { addGoodsOne,getGoodsOne } = require("../service/goodsOneService.js");
router.post('/addGoodsOne', async function (req, res, next) {
    res.send(await addGoodsOne(req.body));
});
router.get('/getGoodsOne', async function (req, res, next) {
    res.send(await getGoodsOne());
});
module.exports = router;