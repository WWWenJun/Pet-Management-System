var express = require('express');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");
const { addGoods,getGoods,deleteGoods,changeGoods } = require("../service/goodsService.js");
router.post('/addGoods', async function (req, res, next) {
    res.send(await addGoods(req.body));
});
router.post('/deleteGoods', async function (req, res, next) {
    res.send(await deleteGoods(req.body));
});
router.post('/changeGoods', async function (req, res, next) {
    res.send(await deleteGoods(req.body));
});
router.post('/addImages', async function (req, res, next) {
    const data = await uploadFile(req, res, {
        fileType: "goods", 
        path: "./public/images"
    });
    res.send(data);
});
router.get('/getGoods', async function (req, res, next) {
    res.send(await getGoods(req.query));
});
module.exports = router;
