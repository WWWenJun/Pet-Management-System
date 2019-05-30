var express = require('express');
var router = express.Router();

const { addGoodsSuit,getGoodsSuit } = require("../service/goodsSuitService.js");
router.post('/addGoodsSuit', async function (req, res, next) {
    res.send(await addGoodsSuit(req.body));
});
router.get('/getGoodsSuit', async function (req, res, next) {
    res.send(await getGoodsSuit());
});
module.exports = router;