var express = require('express');
var router = express.Router();

const { addGoods,getGoods } = require("../service/goodsService.js");
router.post('/addGoods', async function (req, res, next) {
    res.send(await addGoods(req.body));
});
router.get('/getGoods', async function (req, res, next) {
    res.send(await getGoods());
});
module.exports = router;
