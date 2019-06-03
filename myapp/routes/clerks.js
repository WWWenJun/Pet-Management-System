var express = require('express');
var router = express.Router();

const { addClerks, getClerksByPage,removeClerks,getSlurClerks,getClerks,changeClerks } = require("../service/clerksService");

/* GET home page. */
router.post('/addClerks', async function (req, res, next) {
    res.send(await addClerks(req.body));
});
router.post('/changeClerks', async function (req, res, next) {
    res.send(await changeClerks(req.body));
});
router.get('/getClerks', async function (req, res, next) {
    res.send(await getClerks());
});
router.get('/getClerksByPage', async function (req, res, next) {
    res.send(await getClerksByPage(req.query));
});
router.get('/getSlurClerks', async function (req, res, next) {
    res.send(await getSlurClerks(req.query));
});
router.post('/removeClerks', async function (req, res, next) {
    res.send(await removeClerks(req.body));
});

module.exports = router;
